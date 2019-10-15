   const form = $("#form");
   const input_id = $("#studentID").get(0);
   const input_pin = $("#pin").get(0);
   const btn = $("#submitBtn").get(0);

  function login(err) {
    err.preventDefault();
    // Validate credentials
    if (form.get(0).reportValidity()) {
        btn.disabled = true;
        $.get(
            "http://localhost/hall",
            form.serialize(),
            (result) => {
                switch (result) {
                    case "wrong_id":
                        input_id.setCustomValidity("Invalid ID");
                        input_id.reportValidity();
                        btn.disabled = false;
                        break;
                    case "wrong_pin":
                        input_pin.setCustomValidity("Invalid PIN");
                        input_pin.reportValidity();
                        btn.disabled = false;
                        break;
                    default: // Success
                        sessionStorage.setItem("loggedIn", true);
                        sessionStorage.setItem("student", JSON.stringify(result));
                        window.location = "reg.html";
                        break;
                }
            }
        ).fail(() => {
            alert("An error occured. Please try again later.");
            btn.disabled = false;
        });
    }
}