# Cross‑Chain Messaging App

**(Ethereum Sepolia ↔ Polygon Amoy using Hyperlane)**

## Overview

This project is a blockchain-based messaging app that lets users send messages between two different blockchains: Ethereum's Sepolia testnet and Polygon's Amoy testnet. It uses Hyperlane, a cross-chain communication protocol, to make this possible.

---

## What It Does

- ✅ **Send Messages Across Blockchains**  
  You can send a message from one test network (like Sepolia) to another (like Amoy), even though they are separate blockchains.

- 🔁 **Live Message Tracking**  
  Once a message is sent, the app checks its delivery status regularly and updates you in real-time (e.g., pending, delivered, failed).

- 🕒 **View Message History**  
  The app shows a complete list of all sent and received messages, along with timestamps and whether the message was delivered or not.

---

## Why This Project is Useful

- It demonstrates how different blockchains can “talk” to each other—something that’s becoming more and more important in Web3.
- Helps developers and testers try out cross-chain features in a safe, low-cost testnet environment.
- Can be a base for building more complex cross-chain apps, like sending data or tokens between networks.

---

## Built With

- **Hyperlane** – to handle the actual message sending across chains
- **Ethereum Sepolia + Polygon Amoy** – as the two test blockchains
- **Smart Contracts + Frontend UI** – to send, receive, track, and show messages
- **Polling Logic** – to keep checking if the message arrived on the other chain

---

## What’s Next

- Add support for more testnets and eventually mainnets
- Improve message delivery speed and user experience
- Possibly expand to token transfers or other cross-chain use cases
