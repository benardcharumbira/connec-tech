
import {
  useAddress,
  useDisconnect,
  useMetamask,
  useContract,
} from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

import { useEffect, useState } from "react";
import "./styles.css";

function Smarte() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  const sdk = new ThirdwebSDK("mumbai");

 
  const { contract } = useContract(
    "0x0655E9d6Bc020a76aC9c10115e0cB4170C2E9359"
  );

  // Function to read the message from the blockchain
  const [currentMessage, setCurrentMessage] = useState("");

  // On component mount, read the message from the contract
  useEffect(() => {
    async function readMessage() {
      const msg = await contract?.call("get");
      setCurrentMessage(msg);
    }

    if (contract) {
      readMessage();
    }
  }, [contract]);
  const data = {
    sender: "kelello",
    receiver: "makamane",
    doneMeeting: true,
    meetingDate: "2020-06-10",
    notes: "swak weeak papspspp s",
  };
  // Store the new message the user enters in the input in state
  const [newMessage, setNewMessage] = useState("");

  // Function to write the new message to the blockchain
  async function writeMessage() {
    if (!address) return;
    await contract?.call("set", JSON.stringify(data));
  }

  return (
    <div>
      {address ? (
        <>
          <a onClick={disconnectWallet} className="btn2">
            Disconnect Wallet
          </a>

          {/* Display current message */}
          <p>
            Current message: <b>{currentMessage}</b>
          </p>

          {/* Add a new message */}
          <input
            type="text"
            value={newMessage}
            className="input"
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={writeMessage} className="btn">
            Write Message
          </button>
        </>
      ) : (
        <button onClick={connectWithMetamask} className="btn">
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default App;
