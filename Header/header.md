- Whenever we do the Http Request so in that Request there are two types of headers which are as below :
  - 1. Request Header      
  - 2. Response  Header


<br><br>

- Response Header 
   - These are the types of header that server sends to client that contains the meta-data information

<br><br>

- E-tag - Type Of Response Header

- Flow  
     - Client ------Get Req --------> Server 
     - Server ------data ---------> E-Tag [Hash function]
     - Server ---------[Data+E-Tag]---> Client
     
     On Next Request 

     - Clinet -----Get Req[With previously generated E-Tag] --------------> Server 
     - Server ---- check for E-Tag -------> if matches [return the Cache data from browser with ststus code of 304] Else [Repeat the Above Flow]
    

<br><br>

- Type of E-tag 
   - Weak E-tag - In this the comaprison is not that much hard like ignore Date etc
   - Strong E-tag - In this the byte-to-byte comparisone happens 

<br>

- Note - Mostly case - We use Weak E-tag

<br>

- More about E-Tag
   - [W/"4fa-XB4KjhUWD........."] - Looks like that
   - W/ - Weak E-Tag Prefix 
   - 4fa - Content Length [The length of content that server send to user][in Bytes]
   - XB4KjhUWD......... - The Hashed Part - SHA1 or any other hashing alogrithm
   