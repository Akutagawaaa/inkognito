<h1>inKognito</h1>
<p>Inkognito is a decentralized identity management system that leverages blockchain technology to offer secure, self-sovereign identity management. This project is built on the Ethereum Sepolia test network and uses MetaMask to interact with the blockchain, providing a robust and transparent way for individuals to control their personal data.</p>

<h2>Key Features</h2>
<p>Self-Sovereign Identity: Empower users to control their own identity, without relying on centralized intermediaries.
<p>Blockchain Security: Use blockchain technology to ensure immutability, privacy, and security of personal data.</p>
Ethereum Sepolia: Interact with the Ethereum blockchain using the Sepolia test network, allowing for testing and development without real-world costs.
Next.js Framework: A powerful and modern front-end framework for building the decentralized application (dApp).</p>
<h3>Blockchain Description</h3>
<p>Inkognito is integrated with the Ethereum Sepolia test network, allowing developers to experiment with blockchain-based identity solutions. Sepolia is a proof-of-stake (PoS) testnet that mimics Ethereum's main network but uses test ether, making it ideal for testing decentralized applications (dApps) without any financial risk. MetaMask, a browser-based Ethereum wallet, is used for users to interact with the blockchain, including signing transactions and managing identity credentials.</p>

<h3>How the Blockchain is Used</h3>
<p>Decentralized Identity Storage: User identity information is stored on the blockchain to ensure it cannot be tampered with or manipulated.
Ownership of Data: Users have full ownership of their identity, with the ability to manage access and permissions using smart contracts.</p>
<h3>Prerequisites</h3>
<p>Before running this project, ensure you have the following installed:

<p>Node.js (v14 or above)</p>
<p>MetaMask browser extension</p>
<p>Git</p>
<p>Next.js (if not globally installed)</p>
<p>yarn/npm </p>

<h2>Getting Started </h2>
<h4>1. Clone the Repository</h4>
<h5>bash</h5>
<p>git clone https://github.com/Akutagawaaa/inkognito.gitc</p>
<p>cd inkognito</p>
<h5>2. Install Dependencies</h5>
<p>yarn install </p>
<h5>3. Configure MetaMask with Ethereum Sepolia</h5>
<p>Install the MetaMask browser extension from here.</p>
<p>After setting up your MetaMask wallet, you need to add the Sepolia network manually:</p>
<p>Open MetaMask, click on the network dropdown (which will likely show "Ethereum Mainnet").</p>
<p>Select Add Network.</p>
<p>Input the following settings:</p>
<p>Network Name: Sepolia Test Network</p>
<p>New RPC URL: https://rpc.sepolia.org</p>
<p>Chain ID: 11155111</p>
<p>Currency Symbol: ETH</p>
<p>Block Explorer URL: https://sepolia.etherscan.io</p>
<p>Save the settings.</p>
<p>Fund your Sepolia account with test Ether using a Sepolia faucet.</p>
<h5>4. Run the Next.js Project</h5>
<p>Start the development server using the following command:</p>
<p>npm run build</p>
<p>Start running the server using the following command:</p>
<p>npm run start</p>

<p>The app should now be running at http://localhost:3000.</p>

<h3>Interacting with the Blockchain</h3>
<p>Open MetaMask and switch to the Sepolia network.</p>
<p>Connect your MetaMask wallet to the application by authorizing access.</p>
<p>Execute transactions related to identity management directly on the blockchain through the interface.</p>
<p>Folder Structure</p>
<p>.</p>
<p>├── components       # Reusable UI components</p>
<p>├── pages            # Main pages for the Next.js application</p>
<p>├── public           # Static assets</p>
<p>├── smart_contracts  # Smart contracts used in the project</p>
<p>├── styles           # Global and component-specific styles</p>
<p>└── utils            # Utility functions, blockchain interactions</p>
<h4>License</h4>
<p>This project is licensed under the MIT License - see the LICENSE file for details.</p>

<h4>Contributing</h4>
<p>We welcome contributions! Please read our Contributing Guidelines for how to get involved.</p>

<h4>Contact</h4>
<p>For any issues or inquiries, please open an issue or reach out to the maintainer.</p>
