;; music-nft.clar
(define-non-fungible-token music-nft uint)
(define-data-var last-token-id uint u0)

;; Data map for songs
(define-map songs uint 
  {
    artist: principal,
    plays: uint
  }
)

;; Mint new music NFT
(define-public (mint-song)
  (let ((token-id (+ (var-get last-token-id) u1)))
    (try! (nft-mint? music-nft token-id tx-sender))
    (map-set songs token-id {artist: tx-sender, plays: u0})
    (var-set last-token-id token-id)
    (ok token-id)
  )
)

;; Record play
(define-public (record-play (token-id uint))
  (let ((song-data (unwrap! (map-get? songs token-id) (err u404))))
    (map-set songs token-id 
      (merge song-data {plays: (+ (get plays song-data) u1)})
    )
    (ok true)
  )
)