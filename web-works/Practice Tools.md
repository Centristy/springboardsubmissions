## Practice Tools

1. Using curl, make a GET request to the icanhazdadjoke.com API to find all jokes involving the word “pirate”


	curl https://icanhazdadjoke.com/search?term=pirate

	Why couldn't the kid see the pirate movie? Because it was rated arrr!

	What did the pirate say on his 80th birthday? Aye Matey

	What does a pirate pay for his corn? A buccaneer!

	Why do pirates not know the alphabet? They always get stuck at "C".

2. Use dig to find what the IP address is for icanhazdadjoke.com

	DiG 9.18.18-0ubuntu0.22.04.2-Ubuntu <<>> icanhazdadjoke.com  
	;; global options: +cmd
	;; Got answer:  
	;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 55909  
	;; flags: qr rd ad; QUERY: 1, ANSWER: 14, AUTHORITY: 0, ADDITIONAL: 0  
	;; WARNING: recursion requested but not available  
	;; QUESTION SECTION:  
	;icanhazdadjoke.com.            IN      A  

	;; ANSWER SECTION:  
	**icanhazdadjoke.com.     0       IN      A       172.67.198.173**  
	icanhazdadjoke.com.     0       IN      A       104.21.66.15  
	kai.ns.cloudflare.com.  0       IN      A       172.64.33.188  
	kai.ns.cloudflare.com.  0       IN      A       173.245.59.188  
	kai.ns.cloudflare.com.  0       IN      A       108.162.193.188  
	marjory.ns.cloudflare.com. 0    IN      A       173.245.58.193  
	marjory.ns.cloudflare.com. 0    IN      A       108.162.192.193  
	marjory.ns.cloudflare.com. 0    IN      A       172.64.32.193  
	kai.ns.cloudflare.com.  0       IN      AAAA    2803:f800:50::6ca2:c1bc  
	kai.ns.cloudflare.com.  0       IN      AAAA    2a06:98c1:50::ac40:21bc  
	kai.ns.cloudflare.com.  0       IN      AAAA    2606:4700:58::adf5:3bbc  
	marjory.ns.cloudflare.com. 0    IN      AAAA    2a06:98c1:50::ac40:20c1  
	marjory.ns.cloudflare.com. 0    IN      AAAA    2606:4700:50::adf5:3ac1  
	marjory.ns.cloudflare.com. 0    IN      AAAA    2803:f800:50::6ca2:c0c1  

	;; Query time: 0 msec  
	;; SERVER: 172.26.224.1#53(172.26.224.1) (UDP)  
	;; WHEN: Wed Mar 06 18:18:21 KST 2024  
	;; MSG SIZE  rcvd: 442  
	
3. Make a simple web page and serve it using python3 -m http.server. Visit the page in a browser.
	It worked. I included the html file.

