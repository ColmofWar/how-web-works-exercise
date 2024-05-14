/*
**Part One: Solidify Terminology**

- What is HTTP?
HTTP is Hypertext Transfer Protocol.  
It is an internet protocol for transmitting documents like HTML.

- What is a URL?
URL is Uniform Resource Locator.
It is a unique identifier used to locate a resource on a network or internet.
It is divided into sections:
Protocol: The internet protocal used, such as HTTTP and FTP.
Hostname: The name of the host, used in place of an IP address.
Port: The port of which the host uses, can be omitted to use the default of the protocol.
Resource: The location and file name on the host.
Query: Optional, but is used to request additional information from the resource, such as a search.

- What is DNS?
DNS is Domain Name System.
It is like a phonebook for the Internet.
This system allows for individual IP address to have hostnames.
When you use a browser to request a resource from a hostname, it must first be translated to an IP address.
The DNS will check your Computer Cache, Router, ISP, and DNS Server in that order.

- What is a query string?
The query string is part of the URL.  It is located at the end.
The query string is used to request additional resources from the Host.
This can be used for things like a form or for an indexed search.

- What are two HTTP verbs and how are they different?
GET: a verb used to request data from a resource
POST: a verb used to submit an entity to a resource.

- What is an HTTP request?
A HTTP request is a request to a server that uses a URL and HTTP verb.
This will result in a HTTP response.

- What is an HTTP response?
A HTTP response is what is returned from a server after a HTTP request.
It will consist of the HTTP body and HTTP header.

- What is an HTTP header? Give a couple examples of request and response headers you have seen.
An HTTP request header is used to specify additional aspects of an HTTP request.
An HTTP response header holds additional information about the response.
Examples of headers:
Accept-Language informs the server about the human language the server is expected to send back.
Cookie contains stored HTTP cookies previousely sent by the server.
Content-Disposition Indicates if the resource transmitted should be displayed inline (default behavior without the header),
or if it should be handled like a download and the browser should present a "Save As" dialog.

- What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
The browser will recognise that you are making an HTTP request.
The browser will then use DNS to translate the host name to an IP address.
the browser will then send a HTTP request to that IP address for the resourse named page.html located in some/.
This will happen on port 80, as this is the default port for HTTP, and a different port was not specified.
The server will receive the HTTP request and send back a HTTP response
The browser will then parse the HTTP response body, and use the HTTP header for an additional information.
The browser will then display the webpage.

*/

/*
**Part Two: Practice Tools**

1. Using ***curl***, make a ***GET*** request to the *icanhazdadjoke.com* API to find all jokes involving the word “pirate”
What does a pirate pay for his corn? A buccaneer!
Why couldn't the kid see the pirate movie? Because it was rated arrr!
What did the pirate say on his 80th birthday? Aye Matey!
Why are pirates called pirates? Because they arrr!
Why do pirates not know the alphabet? They always get stuck at "C".

2. Use ***dig*** to find what the IP address is for *icanhazdadjoke.com*
172.67.198.173

3. Make a simple web page and serve it using ***python3 -m http.server***. Visit the page in a browser.


*/