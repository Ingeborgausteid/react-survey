function CheckboxComponent({onChange, data}) {
  return (
    <ul>
      <li>
        <label>
          <input 
          name="timeSpent" 
          type="checkbox" 
          value="swimming" 
          onChange={onChange}
          checked={data["timeSpent"].includes("swimming") ? true: false}/>
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input 
          name="timeSpent" 
          type="checkbox" 
          value="bathing" 
          onChange={onChange}
          checked={data["timeSpent"].includes("bathing") ? true: false}/>
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input 
          name="timeSpent" 
          type="checkbox" 
          value="chatting" 
          onChange={onChange}
          checked={data["timeSpent"].includes("chatting") ? true: false}/>
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input 
          name="timeSpent" 
          type="checkbox" 
          value="noTime" 
          onChange={onChange}
          checked={data["timeSpent"].includes("noTime") ? true: false}/>
          I don't like to spend time with it
        </label>
      </li>
    </ul>
  );
}

export default CheckboxComponent;