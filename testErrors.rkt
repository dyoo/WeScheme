;Testing Examples

(check-expect 2 2 2 2 2)
(define (f x) (+ x 2)) (f 1 2 3 4 5 6)
(2 4 5)
(2)
(star 1 2 3 4 5 6)
(/ 5 0)
(/ 5 (- 2 2))
(/ 4 3 2 0 1 2)
(/ 4 3 2 0)



(substring "hello" 6)
(substring "hello" 12 0)
(substring "hello" 2 12)
(list-ref (list 1 2 3 4) 4)
(list-ref (list 1 2 3 4) 7)
(list-ref (list 1 2 3 4) -2)
(explode 2)
(string-length 45)
(* 2 "hello")
(+ 2 2 2 2 "hello" 2 2 2)
(/ "hello" 4)
(star 1 1 1 1 1)
(square 50 9 "red")
(check-expect 3 2)
(define (f x)
  (cond
    [else 6]
    [(= 2 1) 4]))
(define (label-near? name label word1 word2 word3) 
  (cond [(string=? word1 name) 
         (cond [(string=? word2 label) true] [(string=? word3 label) true]) 
         [(string=? word2 name) 
                                                                             
          (cond [(string=? word1 label) true] 
                                                                                
                [(string=? word2 label) true]) 
                                                                            
          [(string=? word3 name) 
                                                                             
           (cond [(string=? word2 label) true] 
                                                                                
                 [(string=? word3 label) true]) 
                                                                            
           [else false]]]]))
(define (f x)
  (cond
    [(= x 1) 1]
    [(= x 2) 1 2 3 4]
    [(= x 3) 3]
    [else 4]))
(define (f x)
  (cond
    [(= x 1) 1]
    [(= x 2)]
    [(= x 3) 3]
    [else 4]))    
(define )
(define () )
(define () 3)
(define () 3 4 5)
(define (x) )
(define (x) 3)
(define (x y) 3 4)
(define ("x") )
(define ("x") )
(define ("x" y ) 2)
(define (x y 7) 4)
(define x)
(define x 1 2 3 4)
(define x y 1 2 3)
(define "x" 1)









;Changed error messages
;procedure application: expected procedure ... TO function application: expected function
;[5,3] to 5 or 3 

;deleted some instances of first person in error message text



;compile-time errors

;if
;;make-moby-error-type:if-too-few-elements
;;make-moby-error-type:if-too-many-elements

;cond
;;conditional-clause-too-many-elements
;;conditional-clause-too-few-elements
;;conditional-malformed-clause
;;conditional-missing-question-answer
;;else clause should be last but there is another clause after it

;quote
;;make-moby-error-type:quote-too-few-elements
;;make-moby-error-type:quote-too-many-elements


(define (label-near? name label word1 word2 word3) 
  (cond [(string=? word1 name) 
         (cond [(string=? word2 label) true] [(string=? word3 label) true]) 
         [(string=? word2 name) 
                                                                             
          (cond [(string=? word1 label) true] 
                                                                                
                [(string=? word2 label) true]) 
                                                                            
          [(string=? word3 name) 
                                                                             
           (cond [(string=? word2 label) true] 
                                                                                
                 [(string=? word3 label) true]) 
                                                                            
           [else false]]]]))

;;big-bang, make-struct-field-accessor, bitmap/url