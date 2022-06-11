import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useEffect, useState } from "react";
import {
  useAddress,
  useDisconnect,
  useMetamask,
  useContract,
} from "@thirdweb-dev/react";


export function CustomerListResults({ customers, ...rest }) {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [dataa, setDataa] = useState({
    sender: "",
    receiver: "",
    doneMeeting: true,
    meetingDate: "",
    notes: "",
  })
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [sender, setSender] = useState('')


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

  const setDataValues = (sender, receiver) => {
    setDataa({
      sender: sender,
      receiver: receiver
    })

  }

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0 &&
                      selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell> */}
                <TableCell>Name</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(0, limit).map((customer) => (
                <>
                
                  <TableRow
                    hover
                    key={customer.id}
                    selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                  >
                    {/* <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                      onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell> */}
                    <TableCell>
                      {/* {setDataValues(customer.name,customer.name)} */}
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <Avatar src={customer.avatarUrl} sx={{ mr: 2 }}>
                          {getInitials(customer.name)}
                        </Avatar>
                        <Typography color="textPrimary" variant="body1">
                          {customer.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{customer.role}</TableCell>
                    <TableCell>
                      {/* {`${customer.role}`} */}

                      {/* <Button color="primary" variant="contained" onClick={writeMessage}>
                      CONNECT
                    </Button> */}
                      <div key={customer.id}>
                        {customer.name === 'Cao Yu' ? (
                          <>
                            {/* <a onClick={disconnectWallet} className="btn2">
                            Disconnect Wallet
                          </a> */}

                            {/* Display current message */}
                            {/* <p>
                            Current message: <b>{currentMessage}</b>
                          </p> */}

                            {/* Add a new message */}
                            {/* <input
                            type="text"
                            value={newMessage}
                            className="input"
                            onChange={(e) => setNewMessage(e.target.value)}
                          />
                          <button onClick={writeMessage} className="btn">
                            Write Message
                          </button> */}
                            <Button disabled color="primary" variant="contained" onClick={connectWithMetamask}>
                              Connected
                            </Button>
                          </>
                        ) : (
                          <Button color="primary" variant="contained" onClick={connectWithMetamask}>
                            Connect Wallet
                          </Button>
                        )}
                      </div>
                    </TableCell>
                    {/* <TableCell>
                    {customer.phone}
                  </TableCell>
                  <TableCell>
                    {format(customer.createdAt, 'dd/MM/yyyy')}
                  </TableCell> */}
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired
};
