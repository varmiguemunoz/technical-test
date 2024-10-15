import { useState } from "react";
import InformationTable from "./components/InformationTable";
import PhoneBookForm from "./components/PhoneBookForm";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

function App() {
  const [contacts, setContacts] = useState([]);

  const addEntryToPhoneBook = (entry) => {
    setContacts((prev) => [...prev, entry]);
  };

  return (
    <section>
      <PhoneBookForm style={style} addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable style={style} contacts={contacts} />
    </section>
  );
}

export default App;
