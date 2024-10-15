function PhoneBookForm({ addEntryToPhoneBook, style }) {
  const handleFormValues = (e) => {
    e.preventDefault();
    try {
      const fields = Object.fromEntries(new window.FormData(e.target));
      addEntryToPhoneBook(fields);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <form
      onSubmit={(e) => {
        handleFormValues(e);
      }}
      style={style.form.container}
    >
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        defaultValue={"Coder"}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        defaultValue={"Byte"}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        defaultValue={"8885559999"}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
}

export default PhoneBookForm;
