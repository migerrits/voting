```html
   Draft: Work-in-progress
```
# Rubix Dapp Stack

Keywords: rubix dapp stack, starter kit, dapp stack, starter project, project template, nodejs, light-weight stack, works with local rubix node with 8545 opened for JSON-RPC

## Pre-requisites

	1. Node.js (apt-get install - y nodejs nodejs-legacy)
	2. NPM (apt-get install -y npm)
	3. Grunt, Grunt - CLI (npm install -g grunt, npm install -g grunt-cli)

## Initial Setup

	1. Run your Rubix node
	2. Install the Rubix Control Center (the IDE tab can be used to write initial Smart Contract and unit test in local VM as well as deploy to your node)
	4. Save rubix-dappstack
	5. Go into the https folder and run ./setup.sh. For 'common name', make sure to use the host name of the server this dapp will run on

## The Stack

Front-end:
<table>
<tr><td>Bootstrap</td><td>Styling/themes</td></tr>
<tr><td>AngularJS</td><td>Front-end MVC (includes Rubix Angular Services)</td></tr>  
<tr><td>D3</td><td>Visualizations</td></tr>  
</table>

Application:
<table>
<tr><td><i>(in progress)</i> Rubix Account Management</td><td>Account creation, authentication, signing</td></tr>
<tr><td>Rubix Web3 Services</td><td>Rubix Web3 APIss for client-side code to call</td></tr>
<tr><td>WS 							            </td><td>                    Web Sockets</td></tr>
<tr><td>NeDB						                    </td><td>            Light-weight no-sql database</td></tr> 
<tr><td>Lodash						                      </td><td>        Utility module (generic, collections, string)</td></tr>
<tr><td>Body-parser					                    </td><td>        Utility module (body-parsing of various formats)</td></tr>
<tr><td>Chalk						</td><td>                                Colored logger</td></tr>
<tr><td>Karma					</td><td>	                                Unit test automation framework</td></tr>
<tr><td>Jasmine				</td><td>	  	                            Unit testing framework</td></tr>
<tr><td>Web3					</td><td>	                                Rubix Web3 APIs for local calls to your node</td></tr>
</table>

Web Server:
	<table>
<tr><td>Express</td><td>							Middleware fuctionalities (routing, APIs, ...)</td></tr>
<tr><td>			Node.js</td><td>	 					Web server</td></tr>
</table>

Currently developing for next release:
	<br>- file storage module  (IPFS or legacy)
	<br>- database module (BDB or legacy)
	<br>- authentication module (use passport and replace underlying authenticaiton mechanism to rubix addresses / private keys)
	<br>- contract management module

## Guidelines

1. options for getting node data / interacting with the node:
- Rubix Angular Services:		use for front-end queries (e.g., in angular controllers)
- Rubix Web 3 Services:			use for both front-end and server-side queries (e.g., in nodejs app.js)
- Web Sockets:					    use for front-end to back-end "chatter"
2. only use web3 for local calls, i.e., from the same box as the rubix ndoe
3. <i>(Janison to import more from notes)</i>

## FAQ's

Q1: What the hell's the dappstack?
A1: Stater application stack for developers.  Includes components of a full stack and pre-built Rubix specific components like Smart Contract management and Rubix APIs.

Q2: Why not use the Web3 API (e.g., "web3.eth.getBlock(5)") directly on the node instead of Rubix APIs?
A2: security, load-balancing (in the future), cleaner application code, ...

Q3: Does Rubix have anything to do with the Rubick's cube?
A3: Nope.

Q4: Will this work with non-local nodes?
A4: Yes. Although the Web3 API is meant to be used locally on the node. The Rubix APIs add another layer that enable you to access the APIs once any application built on the dappstack is deployed.

Q5: Do I have to use NeDB? What about Mongo?
A5: You can easily swap out NeDB with Mongo.  Note that Mongo has not been tested and may require code-modification. NeDB was included for ease of onboarding and to keep the stack lightweight unless otherwise needed.

Q6: Can I extend the Rubix Web3 Services to have my own functions?
A7: Yes. <i>(janison to addsteps)</i>

<i>(Janison to import more from notes)</i>
# voting
