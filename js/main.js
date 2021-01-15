var input = document.querySelector("input");
var form = document.querySelector("form");
var alert = document.querySelector(".alert");

// Try to hook into Adobe Connect
var cpu = ConnectCustomSDK.SyncConnector || {};

// Check if we are actually in an Adobe Connect room

if (cpu) {
  const onConfigured = () => {
    console.log("Custom pod is ready.");
  };

  const onSyncMessageReceived = (event) => {
    // event.msgNm = name of message
    // event.msgVal = value of message

    alert.innerHTML =
      "Message received: " +
      event.msgVal +
      " (Event name: <code>" +
      event.msgNm +
      "</code>)";
    alert.style.display = "block";
  };

  cpu.init(
    onConfigured,
    "com.example.custompodexample",
    "9.5.001",
    "connectsdkhook"
  );

  // Allow participants to send a message event
  cpu.allowParticipantPublish("message", true);

  // Register the syncMessageReceieved event
  // This will allow us to receive a message from another person
  cpu.registerCallback("syncMessageReceived", onSyncMessageReceived);

  // Check when form is submitted
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    console.log("Form submitted");

    alert.innerText = "Message sent!";
    alert.style.display = "block";

    // send a message to all of the people in the room except yourself
    // input.value is the value of the message
    cpu.dispatchSyncMessage("message", input.value, false, false);
  });
}
