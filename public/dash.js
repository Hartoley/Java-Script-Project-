const firebaseConfig = {
  apiKey: "AIzaSyCBDcr1-UA5L3VqePCbSOCMoxp_Kv9jNxI",
  authDomain: "keena-pay.firebaseapp.com",
  projectId: "keena-pay",
  storageBucket: "keena-pay.appspot.com",
  messagingSenderId: "626250170104",
  appId: "1:626250170104:web:dfb5248146be35d826c50d",
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
let pins2 = document.getElementById("pins2");
let description = document.getElementById("descript");
let inptre = document.getElementById("inputre");
let pincontainer = document.getElementById("pincontainer")
let showamt7 = document.getElementById("showamt7");
let none = document.getElementById('none')
let displaymycards = document.getElementById("displaymycards")
let add = document.getElementById("add")
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p16 = document.getElementById("p16");
let p26 = document.getElementById("p26");
let p36 = document.getElementById("p36");
let p46 = document.getElementById("p46");
let p11 = document.getElementById("p11");
let p21 = document.getElementById("p21");
let p31 = document.getElementById("p31");
let p41 = document.getElementById("p41");
let atm = document.getElementById("atm");
let atm1 = document.getElementById("atm1");
let cvvnum =document.getElementById("cvvnum")
let cvvnum1 =document.getElementById("cvvnum1")
let phonenum = document.getElementById("phonenum");
let senditt2 = document.getElementById("senditt2");
let senditt6 = document.getElementById("senditt6");
let receiversName = document.getElementById("receiversName");
let userinpname = document.getElementById("userinpname");
let userinpemail = document.getElementById("userinpemail");
let userinpnumber = document.getElementById("userinpnumber");
let userinpbvn = document.getElementById("userinpbvn");
let userinpaddress = document.getElementById("userinpaddress");
let userinppassword = document.getElementById("userinppassword");
let userinpprofession = document.getElementById("userinpprofession");
let file = document.getElementById("profileimg");
let lasttransactions = document.getElementById("lastme");
const fileInput = document.getElementById("fileInput");
let type = document.getElementById("type");
let accountnumber = document.getElementById("send22");
let accountname = document.getElementById("send33");
let last = document.getElementById("lastme");
let table = document.getElementById("bbig");
const tbody1 = document.getElementById("tbody1");
let inputre = document.getElementById("inputre");
let airtimeamt = document.getElementById("airtimeamt");
let piner = document.getElementById("piner");
let Dated = document.getElementById("Dated");
let Type = document.getElementById("Type");
let Amount = document.getElementById("Amount");
let Senderacc = document.getElementById("Senderacc");
let Sendername = document.getElementById("Receiveracc");
let Beneficiary = document.getElementById("Beneficiary");
let Beneficiaryn = document.getElementById("Beneficiaryn");
let amount = document.getElementById("amount");
let welcome = document.getElementById("welcome");
let move = document.getElementById("move");
let founduserslist = false;
let sender = null;
let pins = document.getElementById("pins");
let big = document.getElementById("big");
let transfersh = document.getElementById("transfer");
let history1 =document.getElementById("history1")
let dishistory = document.getElementById("history");
let dashsettings = document.getElementById("dashsetting");
let yes = document.getElementById("yes");
let senditt = document.getElementById("senditt");
let pined = document.getElementById("pined");
let showamts = document.getElementById("showamts");
let showamt1 = document.getElementById("showamt1");
let thereceivers = document.getElementById("thereceivers");
let thereceiver1 = document.getElementById("thereceiver1");
let showamt2 = document.getElementById("showamt2");
let thereceiver2 = document.getElementById("thereceiver2");
let showamt = document.getElementById("showamt");
let pin = document.getElementById("pin");
let pins1 = document.getElementById("pins1");
let thereceiver = document.getElementById("thereceiver");
let money = document.getElementById("money");
let money1 = document.getElementById("money1");
let money3 = document.getElementById("money3");
let receipt = document.getElementById("receipt");
let verified = document.getElementById("send44");
let receipt2 = document.getElementById("receipt2");
let key1 = document.getElementById("key1")
let key17 = document.getElementById("key17")
let key27 = document.getElementById("key27")
let key37 = document.getElementById("key37")
let key47 = document.getElementById("key47")
let fixed = document.getElementById("fixed")
const userslist = [];
let foundUser = null;
let lasttransactionsHTML = "";
let tbody1HTML = "";
const storageRef = firebase.storage().ref();
let namere = document.getElementById("name")
let named = document.getElementById("name1")
let outcome = "";
let profp = document.getElementById("profp");


function profileimage(ev) {
  console.log(ev.target.files);
  let file = ev.target.files[0];
  let read = new FileReader();

  read.addEventListener("load", (el) => {
    let outcome = el.target.result;
    console.log(outcome);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const email = user.email;
        profileimg.src = outcome;
        profp.src = outcome;
        db.collection("Profile")
          .doc(email)
          .update({
            profileimage: outcome,
          })
          .then(() => {
            alert("Profile Picture updated successfully!!!");
            console.log("Profile Picture updated successfully!");
          })
          .catch((error) => {
            console.error("Error updating profile: ", error);
          });
      } else {
      }
    });
  });

  if (file) {
    read.readAsDataURL(file);
  }
}

function profile1() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const email = user.email;
      const updateData = {};

      if (userinpbvn.value && userinpbvn.value.length === 11) {
        updateData.bvn = userinpbvn.value;
      }
      
      if (userinpname.value) {
        updateData.username = userinpname.value;
      }
      if (userinpaddress.value) {
        updateData.useraddress = userinpaddress.value;
      }
      if (userinpnumber.value ) {
        updateData.phonenumber = userinpnumber.value;
      }
      if (userinpemail.value ) {
        updateData.email = userinpemail.value;
      }
      if (userinppassword.value && userinppassword.value.length === 4) {
        updateData.pin = userinppassword.value;
      }

      if (userinpprofession.value ) {
        updateData.occupation = userinpprofession.value;
      }
  
      if (Object.keys(updateData).length > 0) {
        db.collection("Profile")
          .doc(email)
          .update(updateData)
          .then(() => {
            alert("Profile updated successfully");
            console.log("Success");
          })
          .catch((error) => {
            console.error("Error updating profile: ", error);
          });
      } else {
        console.log("No data to update");
      }
    } else {
      console.log("User not signed in");
    }
  });
}




function pinn(currentInput, prevInput) {
  if (p1.value.length == 1) {
    p2.focus();
  }
  if (p2.value.length == 1) {
    p3.focus();
  }
  if (p3.value.length == 1) {
    p4.focus();
  }
  if (p4.value.length == 1) {
  }
  
  if (currentInput.value.length === 0) {

    prevInput.focus();
  
    prevInput.value = "";
  }
}


p1.addEventListener('keydown', function(event) {
  if (event.key === "Backspace") {
    pinn1(p1, null);
  }
});

p2.addEventListener('keydown', function(event) {
  if (event.key === "Backspace") {
    pinn1(p2, p1);
  }
});

p3.addEventListener('keydown', function(event) {
  if (event.key === "Backspace") {
    pinn1(p3, p2);
  }
});

p4.addEventListener('keydown', function(event) {
  if (event.key === "Backspace") {
    pinn1(p4, p3);
  }
});




function pinn1(currentInput, prevInput) {
  if (p11.value.length == 1) {
    p21.focus();
  }
  if (p21.value.length == 1) {
    p31.focus();
  }
  if (p31.value.length == 1) {
    p41.focus();
  }
  if (p41.value.length == 1) {
  }
  if (currentInput.value.length === 0) {
    prevInput.focus();
    prevInput.value = "";
  }
}

p11.addEventListener('keydown', function(event) {
  if (event.key === "Backspace") {
    pinn1(p11, null);
  }
});

p21.addEventListener('keydown', function(event) {
  if (event.key === "Backspace") {
    pinn1(p21, p11);
  }
});

p31.addEventListener('keydown', function(event) {
  if (event.key === "Backspace") {
    pinn1(p31, p21);
  }
});

p41.addEventListener('keydown', function(event) {
  if (event.key === "Backspace") {
    pinn1(p41, p31);
  }
});





function pinn6(currentInput, prevInput) {
    if (p16.value.length == 1) {
      p26.focus();
    }
    if (p26.value.length == 1) {
      p36.focus();
    }
    if (p36.value.length == 1) {
      p46.focus();
    }
    if (p46.value.length == 1) {
    }
  if (currentInput.value.length === 0) {
    prevInput.focus();
    prevInput.value = "";
  }
}


p16.addEventListener('keydown', function(event) {
  if (event.key === "Backspace") {
    pinn6(p16, null);
  }
});

p26.addEventListener('keydown', function(event) {
  if (event.key === "Backspace") {
    pinn6(p26, p16);
  }
});

p36.addEventListener('keydown', function(event) {
  if (event.key === "Backspace") {
    pinn1(p36, p26);
  }
});

p46.addEventListener('keydown', function(event) {
  if (event.key === "Backspace") {
    pinn1(p46, p36);
  }
});


function isloggedin() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // console.log(user);
      var uid = user.uid;
      // console.log(user.email);
      const db = firebase.firestore();
      var docRef = db.collection("Profile").doc(user.email);

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {

            profileimg.src = doc.data().profileimage;
            profp.src = doc.data().profileimage;
            amount.innerHTML = `${doc.data().balance}`;
            welcome.innerHTML = doc.data().username;
            key1.innerHTML = "****";
            key2.innerHTML = doc.data().key2;
            key3.innerHTML = doc.data().key3;
            key4.innerHTML = "****";
            key17.innerHTML = doc.data().key1
            key27.innerHTML = doc.data().key2
            key37.innerHTML = doc.data().key3
            key47.innerHTML = doc.data().key4

            cvvnum.innerHTML= doc.data().cvv
            cvvnum1.innerHTML= doc.data().cvv
            move.innerHTML = `Welcome to your dashboard ${doc.data().username}, Happy banking!!!`;    
          }  if (doc.data().purchasedCard == true) {
            namere.innerHTML = `${doc.data().firstname} ${doc.data().lastname}`;
            named.innerHTML = `${doc.data().firstname} ${doc.data().lastname}`;
            add.innerHTML= "View Card details"
          } else {
            console.log("Purchased card not found!");
            
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    } else {
      console.log("No user found");
      window.location.href = "login.html";
    }
  });
}

isloggedin();

function myaccount() {}

function right() {
  atm.style.left = "-300%";
  atm1.style.left = "0";
}

function left() {
  atm.style.left = "0";
  atm1.style.left = "-300%";
}

function airtime() {
  money.style.display = "none";
  money3.style.display = "none";
  money1.style.display = "flex";
}

function fund() {
  money1.style.display = "none";
  money3.style.display = "none";
  money.style.display = "flex";
}
function data() {
  money.style.display = "none";
  money1.style.display = "none";
  money3.style.display = "flex";
}

function foundreceiver() {
  db.collection("Profile")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        if (doc.data().account_number == accountnumber.value) {
          foundUser = {
            email: doc.id,
            id: doc.id,
            balance: doc.data().balance,
            acountnumber: doc.data().account_number,
            firstname: doc.data().firstname,
            lastname: doc.data().lastname,
          };
        }
      });

      if (foundUser) {
        accountname.value = `${foundUser.firstname} ${foundUser.lastname}`;

      } else {
      
      }
    });
}

foundreceiver();

function transfer1() {
  if (foundUser) {
    thereceiver.innerHTML = `${foundUser.firstname} ${foundUser.lastname}`;
    console.log(verified.value);
    showamt2.innerHTML = verified.value;
    fixed.style.position ="fixed"
    pincontainer.style.display = "flex";
    pin.style.display = "flex";
  } else {
    alert("invalid user");
  }
}



function transfer() {
  gen = "";
  senditt.innerHTML = `
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span class="visually-hidden" role="status">Loading...</span>
  `;
  firebase.auth().onAuthStateChanged((currentUser) => {
    if (currentUser) {
      const currentuserdocref = db.collection("Profile").doc(currentUser.email);
      currentuserdocref
        .get()
        .then((sender) => {
          if (sender.exists) {
            console.log(sender.data().pin);
            const currentuserbal = sender.data().balance;
            console.log(currentuserbal);
            const transferamt = verified.value;
            const receiverbalance = foundUser.balance;

            if (
              `${p1.value}${p2.value}${p3.value}${p4.value}` ==
              sender.data().pin
            ) {
              if (transferamt <= 0 || transferamt > currentuserbal) {
                alert("Invalid Transfer Amount");
              } else {
                for (let inde = 0; inde < 10; inde++) {
                  randomnumber = Math.floor(Math.random() * 10);
                  console.log(randomnumber);
                  gen += randomnumber;
                }

                currentuserdocref
                  .update({
                    balance: currentuserbal - transferamt,
                  })
                  .then(() => {
                    db.collection("Profile")
                      .doc(currentUser.email)
                      .onSnapshot((doc) => {
                        amount.innerHTML = doc.data().balance;
                      });
                  })

                  .then(() => {
                    db.collection("Profile")
                      .doc(foundUser.email)
                      .update({
                        balance: Number(receiverbalance) + Number(transferamt),
                      });
                    db.collection("transaction")
                      .doc(gen)
                      .set({
                        date: new Date(),
                        senderEmail: sender.data().email,
                        senderName:
                          sender.data().firstname +
                          " " +
                          sender.data().lastname,
                        senderOldBalance: currentuserbal,
                        transferAmount: transferamt,
                        receiverEmail: foundUser.email,
                        receiverName:
                        foundUser.firstname + " " + foundUser.lastname,
                        receiverOldBalance: receiverbalance,
                        receiverNewBalance: receiverbalance + transferamt,
                        senderNewBalance: currentuserbal - transferamt,
                        receiverAcc: foundUser.acountnumber,
                        transactionId: gen,
                        description: description.value,
                        type: "fund",
                      })
                      .then(() => {
                        
                          db.collection("transaction")
                            .doc(currentUser.email)
                            .onSnapshot((doc) => {
                              lasttransactions.innerHTML += `
                              <div id="lasttrans">
                              <img id="debitimg" src="images/images/debit.png" alt="">
                                  <h4 id="lastp"> ${doc.data().receiverName}<h4/>
                                  <p id="lastpp">- N ${doc.data().transferAmount}<p/>
                              </div>
                              `;
      
                        tbody1.innerHTML += `  
                                  <tr id="tab" >
                                  <td>Debit</td>
                                  <td>${doc.data().receiverName}</td>
                                  <td>${doc.data().transferAmount}</td>
                                  <td>${doc.data().transactionId}</td> 
                                  <td>${day} ${month}, ${year}, ${hour}hr ${minute}min  ${second}scs</td>
                                  
                              </tr>
                              
                              `;
                            });
                       
                        const currentDate = new Date();
                        const day = currentDate
                          .getDate()
                          .toString()
                          .padStart(2, "0");
                        const month = (currentDate.getMonth() + 1)
                          .toString()
                          .padStart(2, "0");
                        const year = currentDate.getFullYear();
                        const hour = currentDate
                          .getHours()
                          .toString()
                          .padStart(2, "0");
                        const minute = currentDate
                          .getMinutes()
                          .toString()
                          .padStart(2, "0");
                        const second = currentDate
                          .getSeconds()
                          .toString()
                          .padStart(2, "0");
                        type.innerHTML = "You've successfully transfered ";
                        thereceiver.innerHTML = `${foundUser.firstname} ${foundUser.lastname}`;
                        thereceiver2.innerHTML = `${foundUser.firstname} ${foundUser.lastname}`;
                        console.log(verified.value);
                        showamt2.innerHTML = verified.value;
                        showamt.innerHTML = verified.value;

                        receipt2.innerHTML = `
                          <p class="treceipt" id="Dated">Transaction Date: <span> ${day} ${month}, ${year}, ${hour}hr ${minute}min ${second}scs</span></p>
                          <p class="treceipt" id="Type">Transaction Type: <span>Airtime</span></p>
                          <p class="treceipt" id="Amount">Amount: <span>&#8358;${transferamt}</span></p>
                          <p class="treceipt" id="Senderacc">Source Account: <span>${
                            sender.data().account_number
                          }</span></p>
                          <p class="treceipt" id="Sendername">Source Account Name: <span>${
                            sender.data().firstname
                          } ${sender.data().lastname}</span></p>
                          <p class="treceipt" id="Beneficiary">Beneficiary Account: <span>${
                            foundUser.acountnumber
                          }</span></p>
                          <p class="treceipt" id="Beneficiaryn">Beneficiary Name: <span>${
                            foundUser.firstname
                          } ${foundUser.lastname}</span></p>
                          <p class="treceipt" id="Type">Transaction Id: <span>${gen}</span></p>
                        
`;

                        p1.value = "";
                        p2.value = "";
                        p3.value = "";
                        p4.value = "";
                        verified.value = "";
                        accountnumber.value = "";
                        accountname.value = "";
                        pin.style.display = "none";
                        piner.style.display = "Flex";
                        pins.style.display = "flex";
                        console.log(gen);

                        console.log("Document successfully written!");
                      })
                      .catch((error) => {
                        console.error("Error writing document: ", error);
                      });
                    console.log("Current user's balance updated");
                  });
              }
            } else {
              alert("incorrect pin");
            }
          } else {
            console.log("Current user's document not found");
          }
        })
        .catch((error) => {
          console.error("Error getting document:", error);
        });
    } else {
      console.log("No user found");
    }
  });
}

let totalTransferAmount = 0; 
let monsame = document.getElementById("monsame")


function transfertosamebank(){
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      
    db.collection("transaction")
      .orderBy("date", "desc") 
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().senderEmail == user.email && doc.data().type == "fund") {
           
            totalTransferAmount += parseFloat(doc.data().transferAmount);
            monsame.innerHTML = `${totalTransferAmount}.00`
          }
        });

       
        console.log("Total Transfer Amount:", totalTransferAmount);
      })
      .catch((error) => {
        console.error("Error getting transactions:", error);
      });

    
    }

  })
    
}

transfertosamebank()

function transactionHistory() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;

      db.collection("transaction")
        .orderBy("date", "desc") 
        .get()
        .then((querySnapshot, index) => {
          querySnapshot.forEach((doc, index) => {
           
            if (
              doc.data().senderEmail == user.email &&
              doc.data().type == "fund"
            ) {
              const date = doc.data().date.toDate();
              const year = date.getFullYear();
              const month = (date.getMonth() + 1).toString().padStart(2, "0");
              const day = date.getDate().toString().padStart(2, "0");
              const hour = date.getHours().toString().padStart(2, "0");
              const minute = date.getMinutes().toString().padStart(2, "0");
              const second = date.getSeconds().toString().padStart(2, "0");
             
              

              lasttransactions.innerHTML += `
                        <div id="lasttrans">
                        <img id="debitimg" src="images/images/debit.png" alt="">
                            <h4 id="lastp"> ${doc.data().receiverName}<h4/>
                            <p id="lastpp">- N ${doc.data().transferAmount}<p/>
                        </div>
                        `;

              tbody1.innerHTML += `  
                        <tr id="tab" >
                        <td>Debit</td>
                        <td>${doc.data().receiverName}</td>
                        <td>${doc.data().transferAmount}</td>
                        <td>${doc.data().transactionId}</td> 
                        <td>${day} ${month}, ${year}, ${hour}hr ${minute}min  ${second}scs</td>
                        
                    </tr>
                        
                        `;
  

              // receiversName.innerHTML = doc.data().receiverName
            }
            if (doc.data().receiverEmail == user.email) {
              console.log(doc.data());
              const date = doc.data().date.toDate();
              const year = date.getFullYear();
              const month = (date.getMonth() + 1).toString().padStart(2, "0");
              const day = date.getDate().toString().padStart(2, "0");
              const hour = date.getHours().toString().padStart(2, "0");
              const minute = date.getMinutes().toString().padStart(2, "0");
              const second = date.getSeconds().toString().padStart(2, "0");
             

              lasttransactions.innerHTML += `
                        <div id="lasttrans">
                        <img id="debitimg" src="images/images/credit2.png" alt="">
                        <h4 id="lastp"> ${doc.data().senderName}<h4/>
                        <p id="lastpp">+ N ${doc.data().transferAmount}<p/>
                        </div>
                        `;

              tbody1.innerHTML += `  
                        <tr id="tab" >
                        <td>Credit</td>

                        <td>${doc.data().senderName}</td>
                       
                        <td>${doc.data().transferAmount}</td>
                        <td>${doc.data().transactionId}</td>
                        <td>${day} ${month}, ${year}, ${hour}hr ${minute}min  ${second}scs</td>
                
                        
                    </tr>
                        
                        `;


            }

          

            if (doc.data().type == "airtime" && doc.data().senderEmail == user.email) {
              const date = doc.data().date.toDate();
              const year = date.getFullYear();
              const month = (date.getMonth() + 1).toString().padStart(2, "0");
              const day = date.getDate().toString().padStart(2, "0");
              const hour = date.getHours().toString().padStart(2, "0");
              const minute = date.getMinutes().toString().padStart(2, "0");
              const second = date.getSeconds().toString().padStart(2, "0");

              lasttransactions.innerHTML += `
              <div id="lasttrans">
              <img id="debitimg" src="images/images/credit2.png" alt="">
              <h4 id="lastp"> ${doc.data().receipientNum}<h4/>
              <p id="lastpp">- N ${doc.data().amount}<p/>
              </div>
              `;
              
              tbody1.innerHTML += `  
                      <tr id="tab" >
                      <td>Debit</td>
                      <td>${doc.data().receipientNum}</td>
                      <td>${doc.data().amount}</td>
                      <td>${doc.data().transactionId}</td>
                      <td>${day} ${month}, ${year}, ${hour}hr ${minute}min  ${second}scs</td>
              
                      
                  </tr>
                      
                      `;
            }

            if (doc.data().type == "Debit card" && doc.data().senderEmail == user.email) {
              const date = doc.data().date.toDate();
              const year = date.getFullYear();
              const month = (date.getMonth() + 1).toString().padStart(2, "0");
              const day = date.getDate().toString().padStart(2, "0");
              const hour = date.getHours().toString().padStart(2, "0");
              const minute = date.getMinutes().toString().padStart(2, "0");
              const second = date.getSeconds().toString().padStart(2, "0");

              lasttransactions.innerHTML += `
              <div id="lasttrans">
              <img id="debitimg" src="images/images/credit2.png" alt="">
              <h4 id="lastp"> ${doc.data().type}<h4/>
              <p id="lastpp">- N ${doc.data().amount}<p/>
              </div>
              `;

              tbody1.innerHTML += `  
                      <tr id="tab" >
                      <td>Debit</td>
                      <td>${doc.data().type}</td>
                      <td>${doc.data().amount}</td>
                      <td>${doc.data().transactionId}</td>
                      <td>${day} ${month}, ${year}, ${hour}hr ${minute}min  ${second}scs</td>
              
                      
                  </tr>
                      
                      `;
            }
          });
        });
    } else {
    }
  });
}




function download() {
  pins.style.display = "none";
  pins1.style.display = "flex";
  pins2.style.display = "flex";
}

function download2() {
  pins.style.display = "none";
  pins1.style.display = "flex";
  pins2.style.display = "flex";
}

function closedall() {
  pins.style.display = "none";
  pins1.style.display = "none";
  pins2.style.display = "none";
  piner.style.display = "none";
  pincontainer.style.display = "none"
  fixed.style.position ="static"
}




transactionHistory();

function distransactions() {
  big.style.display = "none";
  transfersh.style.display = "none";
  dishistory.style.display = "block";
  dashsettings.style.display = "none";
  form.style.display = "none";
  history1.style.display = "none";
   fixed.style.position ="static"
   displaymycards.style.display= "none"
 
}

function payment() {
  big.style.display = "none";
  fixed.style.position ="fixed"
  transfersh.style.display = "none";
  dishistory.style.display = "none";
  history1.style.display = "block";
  dashsettings.style.display = "none";
  displaymycards.style.display= "none"
  form.style.display = "block";
 
}

function dashsetting() {
  big.style.display = "none";
  transfersh.style.display = "none";
  dishistory.style.display = "none";
  dashsettings.style.display = "flex";
  form.style.display = "none";
  history1.style.display = "none";
  displaymycards.style.display= "none"
  fixed.style.position ="static"
  
  
}

function home() {
  big.style.display = "flex";
  transfersh.style.display = "flex";
  dishistory.style.display = "none";
  form.style.display = "none";
  history1.style.display = "none";
  dashsettings.style.display = "none";
  // menu.style.display = "none";
   fixed.style.position ="static"
   displaymycards.style.display= "none"
  
}



function transferTransactionHistory() {
  // Get the canvas element
  const ctx = document
    .getElementById("transaction-history-graph")
    .getContext("2d");

  // Create a new Chart object
  const transactionHistoryChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [], // Replace this with your transaction labels
      datasets: [
        {
          label: "Amount",
          data: [], // Replace this with your transaction amounts
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
          ],
          borderColor: [
            "rgba(255, 255, 255, 1)", // Change line color to almost white
            "rgba(255, 255, 255, 1)",
            "rgba(255, 255, 255, 1)",
          ],
          borderWidth: 1,
          // Change font color of "Amount" label to white blue
          font: {
            color: "rgba(173, 216, 230, 1)"
          },
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            // Change font color to almost white
            color: "rgba(255, 255, 255, 0.8)"
          },
        },
        x: {
          ticks: {
            // Change font color to almost white
            color: "rgba(255, 255, 255, 0.8)"
          },
        },
      },
    },
  });

  // Get a reference to the Firestore database

  // Get a reference to the transactions collection
  const transactionsCollection = db.collection("transaction");

  // Query the transactions collection
  transactionsCollection.orderBy("timestamp", "desc").onSnapshot(
    (snapshot) => {
      snapshot.forEach((doc) => {
        if (!doc.exists) {
          console.log("Document not found:", doc.id);
          return;
        }
      
        // Get the transaction data
        const transaction = doc.data();
        console.log(transaction);
      
        // Add the transaction label and amount to the graph data
        transactionHistoryChart.data.labels.push(transaction.senderName);
        transactionHistoryChart.data.datasets[0].data.push(
          transaction.transferAmount
        );
      });
    },
    (error) => {
      console.error("Error fetching transactions:", error);
    }
  );

  // transactionsCollection.orderBy("timestamp", "desc").onSnapshot((snapshot) => {
  //   // Clear the previous data
  //   transactionHistoryChart.data.labels = [];
  //   transactionHistoryChart.data.datasets[0].data = [];

  //   // Loop through the transactions
  //   snapshot.forEach((doc) => {
  //     // Get the transaction data
  //     const transaction = doc.data();
  //     console.log(doc.data());

  //     // Add the transaction label and amount to the graph data
  //     transactionHistoryChart.data.labels.push(transaction.senderName);
  //     transactionHistoryChart.data.datasets[0].data.push(
  //       transaction.transferAmount
  //     );
  //   });

  //   // Update the chart
  //   transactionHistoryChart.update();  q
  // });
}

transferTransactionHistory();






function cancel() {
  p1.value = "";
  p2.value = "";
  p3.value = "";
  p4.value = "";
  p16.value = "";
  p26.value = "";
  p36.value = "";
  p46.value = "";
  p11.value = "";
  p21.value = "";
  p31.value = "";
  p41.value = "";
  pincontainer.style.display = "none"
  pin.style.display = "none";
  pined.style.display = "none";
  pindebit.style.display = "none";
  fixed.style.position ="static"
  
}

function cancel1() {
  pins.style.display = "none";
  pins1.style.display = "none";
  piner.style.display = "none";
  pincontainer.style.display = "none"
  fixed.style.position ="static"
  // menu.style.display = "none";
  // pindebit.style.display = "none";
}

gen = "";
function buyairtime() {
  senditt2.innerHTML = `
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span class="visually-hidden" role="status">Loading...</span>
  `;
 

  firebase.auth().onAuthStateChanged((user) => {
    if (airtimeamt.value == "" || phonenum.value == "" || phonenum.value < 11) {
      alert("Kindly fill all input fields");
    } else {
      if (user) {
        const email = user.email;

        db.collection("Profile")
          .doc(email)
          .get()
          .then((doc) => {
            if (doc.exists) {
              const balance = doc.data().balance;
              const newBalance = balance - airtimeamt.value;
              console.log(doc.data().pin);
              // console.log("Current balance: ", balance);
              // console.log("New balance: ", newBalance);

              if (airtimeamt.value > balance) {
                alert("Insufficient Balance");
              } else if (
                `${p11.value}${p21.value}${p31.value}${p41.value}` !==
                doc.data().pin
              ) {
                alert("Incorrect PIN");
                p11.value = "";
                p21.value = "";
                p31.value = "";
                p41.value = "";

                // console.log(doc.data().pin);
              } else {
                const newBalance = balance - airtimeamt.value;
                db.collection("Profile")
                  .doc(email)
                  .update({
                    balance: newBalance,
                  })

                  .then(() => {
                    db.collection("Profile")
                      .doc(email)
                      .onSnapshot((doc) => {
                        amount.innerHTML = doc.data().balance;
                      });
                    console.log("Document successfully updated");
                    console.log("Balance updated successfully!");
                    for (let inde = 0; inde < 10; inde++) {
                      randomnumber = Math.floor(Math.random() * 10);
                      // console.log(randomnumber);
                      gen += randomnumber;
                    }

                    db.collection("transaction")
                      .add({
                        receiverEmail: "",
                        type: "airtime",
                        amount: airtimeamt.value,
                        date: new Date(),
                        senderEmail: email,
                        senderName: `${doc.data().title} ${
                          doc.data().firstname
                        } ${doc.data().lastname}`,
                        senderOldBalance: balance,
                        senderNewBalance: newBalance,
                        transactionId: gen,
                        receipientNum: phonenum.value,
                        description: description.value,
                        network: inputre.value,
                      })
                      .then(() => {
                        db.collection("transaction")
                        .doc(email)
                        .onSnapshot((doc) => {
                       
                        lasttransactions.innerHTML += `
                        <div id="lasttrans">
                        <img id="debitimg" src="images/images/credit2.png" alt="">
                        <h4 id="lastp" > ${doc.data().receipientNum}<h4/>
                        <p id="lastpp">- N ${doc.data().amount}<p/>
                        </div>
                        `;
                        
                        tbody1.innerHTML += `  
                                <tr id="tab" >
                                <td>Debit</td>
                                <td>${doc.data().receipientNum}</td>
                                <td>${doc.data().amount}</td>
                                <td>${doc.data().transactionId}</td>
                                <td>${day} ${month}, ${year}, ${hour}hr ${minute}min  ${second}scs</td>
                        
                                
                            </tr>
                                
                                `;
                        });
                        thereceiver2.innerHTML = phonenum.value;
                        showamt7.innerHTML = airtimeamt.value;
                        type.innerHTML = "Airtime purchase of ";
                        yes.innerHTML = "successful";
                        p11.value = "";
                        p21.value = "";
                        p31.value = "";
                        p41.value = "";
                        pined.style.display = "none";
                        pins.style.display = "flex";
                        piner.style.display = "Flex";
                        const currentDate = new Date();
                        const day = currentDate
                          .getDate()
                          .toString()
                          .padStart(2, "0");
                        const month = (currentDate.getMonth() + 1)
                          .toString()
                          .padStart(2, "0");
                        const year = currentDate.getFullYear();
                        const hour = currentDate
                          .getHours()
                          .toString()
                          .padStart(2, "0");
                        const minute = currentDate
                          .getMinutes()
                          .toString()
                          .padStart(2, "0");
                        const second = currentDate
                          .getSeconds()
                          .toString()
                          .padStart(2, "0");
                        receipt2.innerHTML = `
                        <p class="treceipt" id="Dated">Transaction Date: <span>${day} ${month}, ${year}, ${hour}hr ${minute}min ${second}scs</span></p>
                        <p class="treceipt" id="Type">Transaction Type: <span>Airtime</span></p>
                        <p class="treceipt" id="Amount">Amount: <span>&#8358 ${airtimeamt.value}</span></p>
                        <p class="treceipt" id="Senderacc">Network: <span>${inputre.value}</span></p>
                        <p class="treceipt" id="Type">Transaction Id: <span>${gen}</span></p>

                        
                        `;
                        // inputre.value =""
                        console.log("Transaction added successfully!");

                        airtimeamt.value = "";
                        phonenum.value = "";
                      })
                      .catch((error) => {
                        console.error("Error adding transaction: ", error);
                      });
                  })
                  .catch((error) => {
                    console.error("Error updating balance: ", error);
                  });
              }
            } else {
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.log("Error getting document: ", error);
          });
      } else {
      }
    }
  });
}

function transfer2() {
  if (airtimeamt.value === "" || phonenum.value === "") {
    alert("Kindly fill all input fields");
  } else if (phonenum.value.length !== 11) {
    alert("Invalid phone number");
  } else {
    fixed.style.position ="fixed"
    thereceiver1.innerHTML = phonenum.value;
    console.log(airtimeamt.value);
    showamt1.innerHTML = airtimeamt.value;
    console.log(showamt1.innerHTML);
    pincontainer.style.display = "flex";
    pined.style.display = "flex";
  }
}

function receiptd() {
  var printContents = document.getElementById('pins1').innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
  
}


function signout() {
  firebase.auth().signOut().then(() => {
    alert("Sign out successful")
  }).catch((error) => {
    window.location.href= "login.html"
  });
}



const form = document.getElementById("form")
let rave_amount =document.getElementById("raveamount")
let rave_username =document.getElementById("raveuser")
let rave_email =document.getElementById("raveemail")
let rave_number =document.getElementById("ravephone")
form.addEventListener("submit", makePayment)
let menu = document.getElementById("horizontal")
let showsucess= document.getElementById("showsucess")

function makePayment(e) {
 
  e.preventDefault()
  const tx_ref = "Kee-pay_" + Math.floor((Math.random()*100000000)+1);

  const modal = FlutterwaveCheckout({
    public_key: "FLWPUBK_TEST-45d26f9315fd37752c266b29ba8e67fe-X",
    tx_ref: tx_ref,
    amount: rave_amount.value,
    currency: "NGN",
    payment_options: "card, mobilemoneyghana, ussd",
    // redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
    meta: {
      consumer_id: 23,
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: rave_email.value,
      phone_number: rave_number.value,
      name: rave_username.value,
    },
    customizations: {
      title: "Kee-Pay",
      description: "Kee pay fund",
      logo: "./images/images/kp img.png",
    },
    callback: function (data){
      console.log("payment callback:", data);
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const email = user.email;
  
          db.collection("Profile")
            .doc(email)
            .get()
            .then((doc) => {
              if (doc.exists) {
                const balance = doc.data().balance;
                const newBalance = +balance + Number(rave_amount.value);
                console.log(doc.data().pin);
               
                  db.collection("Profile")
                    .doc(email)
                    .update({
                      balance: newBalance,
                    })
  
                    .then(() => {
                      db.collection("Profile")
                        .doc(email)
                        .onSnapshot((doc) => {
                          amount.innerHTML = doc.data().balance;
                        });
                      console.log("Document successfully updated");
                      console.log("Balance updated successfully!");
                     
                      db.collection("transaction")
                        .add({
                          type: "Fund by rave",
                          receiverName: ` ${
                            doc.data().firstname
                          } ${doc.data().lastname}`,
                          receiverEmail: email,
                          amount: rave_amount.value,
                          transferAmount: rave_amount.value,
                          date: new Date(),
                          senderEmail: rave_email.value,
                          senderName: rave_username.value,
                          transactionId: tx_ref,
                          description: "Kee pay fund",
  
                        })
                        .then(() => {
                          db.collection("transaction")
                        .doc(email)
                        .onSnapshot((doc) => {
                          
                        lasttransactions.innerHTML += `
                        <div id="lasttrans">
                        <img id="debitimg" src="images/images/credit2.png" alt="">
                        <h4 id="lastp"> ${doc.data().type}<h4/>
                        <p id="lastpp">- N ${doc.data().amount}<p/>
                        </div>
                        `;

                        tbody1.innerHTML += `  
                                <tr id="tab" >
                                <td>Debit</td>
                                <td>${doc.data().type}</td>
                                <td>${doc.data().amount}</td>
                                <td>${doc.data().transactionId}</td>
                                <td>${day} ${month}, ${year}, ${hour}hr ${minute}min  ${second}scs</td>
                        
                                
                            </tr>
                                
                                `;
                        });
                          const currentDate = new Date();
                          const day = currentDate
                            .getDate()
                            .toString()
                            .padStart(2, "0");
                          const month = (currentDate.getMonth() + 1)
                            .toString()
                            .padStart(2, "0");
                          const year = currentDate.getFullYear();
                          const hour = currentDate
                            .getHours()
                            .toString()
                            .padStart(2, "0");
                          const minute = currentDate
                            .getMinutes()
                            .toString()
                            .padStart(2, "0");
                          const second = currentDate
                            .getSeconds()
                            .toString()
                            .padStart(2, "0");
                         
  
                        })
                        .catch((error) => {
                          console.error("Error adding transaction: ", error);
                        });
                    })
                    .catch((error) => {
                      console.error("Error updating balance: ", error);
                    });
                
              } else {
                console.log("No such document!");
              }
            })
            .catch((error) => {
              console.log("Error getting document: ", error);
            });
        } else {
        }
      
    });
      modal.close()
    },
    onclose: function() {
      console.log("Payment cancelled!");
    }
  });

  console.log(success);
  

}



function menubar(){
  menu.style.display = "flex"
  menu.style.width ="30%"
  menu.style.zIndex = "5"

}

function buycard (){

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
  const email = user.email;
  db.collection("Profile")
  .doc(email)
  .get()
  .then((doc) => {
    if (doc.exists) {
    if (doc.data().purchasedCard == true) {
      big.style.display = "none";
      fixed.style.position ="fixed"
      transfersh.style.display = "none";
      dishistory.style.display = "none";
      dashsettings.style.display = "none";
      displaymycards.style.display ="flex"
    
    }else{
      let card = document.getElementById("ares")
      let tos = document.getElementById("tos")
      pincontainer.style.display = "flex";
      pindebit.style.display = "flex";
  
      card.innerHTML= "You wil be debited"
      showamts.innerHTML = "1200"
      tos.innerHTML = "for"
      thereceivers.innerHTML= "Debit cards purchase"
    }
  } else {
    console.log("No such document!");
  }
  })
  .catch((error) => {
    console.log("Error getting document: ", error);
  });

}
})


}

function debit() {
  
  gen1 = "";
  gen2 = "";
  gen3 = "";
  gen4 = "";
  cvvpin = "" ;
  

  
  
  senditt6.innerHTML = `
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span class="visually-hidden" role="status">Loading...</span>
  `;


    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const email = user.email;
        for (let cvv = 0; cvv < 3; cvv++) {
          randomcvv = Math.floor(Math.random() * 4);
          // console.log(randomcvv);
          cvvpin += randomcvv;
          
        }
        console.log(cvvpin);

        for (let inde = 0; inde < 10; inde++) {
          randomnumber = Math.floor(Math.random() * 10);
          console.log(randomnumber);
          gen += randomnumber;
        }
        for (let inde1 = 0; inde1 < 4; inde1++) {
          randomnumber1 = Math.floor(Math.random() * 10);
          console.log(randomnumber1);
          gen1 += randomnumber1;
        }
        for (let inde2 = 0; inde2 < 4; inde2++) {
          randomnumber2 = Math.floor(Math.random() * 10);
          console.log(randomnumber2);
          gen2 += randomnumber2;
        }
        for (let inde3 = 0; inde3 < 4; inde3++) {
          randomnumber3 = Math.floor(Math.random() * 10);
          console.log(randomnumber2);
          gen3 += randomnumber3;
        }
        for (let inde4 = 0; inde4 < 4; inde4++) {
          randomnumber4 = Math.floor(Math.random() * 10);
          console.log(randomnumber4);
          gen4 += randomnumber4;
        }

        db.collection("Profile")
          .doc(email)
          .get()
          .then((doc) => {
            if (doc.exists) {
              const balance = doc.data().balance;
              console.log(doc.data().pin);
              

              if (airtimeamt.value > 1200) {
                alert("Insufficient Balance");
              } else if (
                `${p16.value}${p26.value}${p36.value}${p46.value}` !==
                doc.data().pin
              ) {
                alert("Incorrect PIN");
                p16.value = "";
                p26.value = "";
                p36.value = "";
                p46.value = "";

               
              } else {
                const newBalance = balance - "1200";
                db.collection("Profile")
                  .doc(email)
                  .update({
                    balance: newBalance,
                    key1: gen1,
                    key2: gen2,
                    key3: gen3, 
                    key4:gen4,
                    cvv:cvvpin,
                    purchasedCard:true,
                  })

                  .then(() => {
                    db.collection("Profile")
                      .doc(email)
                      .onSnapshot((doc) => {
                        namere.innerHTML = `${doc.data().firstname} ${doc.data().lastname}`;
                        amount.innerHTML = doc.data().balance;
                        key1.innerHTML = "****"
                        key2.innerHTML = doc.data().key2
                        key3.innerHTML = doc.data().key3
                        key4.innerHTML = "****"
                      });
                    console.log("Document successfully updated");
                    console.log("Balance updated successfully!");
                   

                    db.collection("transaction")
                      .add({
                        receiverEmail: "",
                        senderEmail: doc.data().email,
                        type: "Debit card",
                        amount: "1200",
                        date: new Date(),
                        senderEmail: email,
                        senderName: `${doc.data().username}`,
                        senderOldBalance: balance,
                        senderNewBalance: newBalance,
                        transactionId: gen,
                        receipientNum: "Debit card purchase",
                        description: description.value,
                        key1: gen1,
                        key2: gen2,
                        key3: gen3, 
                        key4:gen4,
                        
                      })
                      .then(() => {
                        
                        thereceivers.innerHTML = "Debit card"
                        showamt7.innerHTML = "1200";
                        
                        type.innerHTML = "Purchase of debit card";
                        yes.innerHTML = "successful";
                        showsucess.innerHTML = "Purchase successful"
                        p16.value = "";
                        p26.value = "";
                        p36.value = "";
                        p46.value = "";
                        pindebit.style.display = "none";
                        pins.style.display = "flex";
                        piner.style.display = "Flex";
                        const currentDate = new Date();
                        const day = currentDate
                          .getDate()
                          .toString()
                          .padStart(2, "0");
                        const month = (currentDate.getMonth() + 1)
                          .toString()
                          .padStart(2, "0");
                        const year = currentDate.getFullYear();
                        const hour = currentDate
                          .getHours()
                          .toString()
                          .padStart(2, "0");
                        const minute = currentDate
                          .getMinutes()
                          .toString()
                          .padStart(2, "0");
                        const second = currentDate
                          .getSeconds()
                          .toString()
                          .padStart(2, "0");
                       
                        receipt2.innerHTML = `
                        <p class="treceipt" id="Dated">Transaction Date: <span>${day} ${month}, ${year}, ${hour}hr ${minute}min ${second}scs</span></p>
                        <p class="treceipt" id="Type">Transaction Type: <span>Card Purchase</span></p>
                        <p class="treceipt" id="Amount">Amount: <span>&#8358 1200</span></p>
                        <p class="treceipt" id="Senderacc">Card: <span>Debit</span></p>
                        <p class="treceipt" id="Type">Transaction Id: <span>${gen}</span></p>

                        
                        `;
                      
                       
                        console.log("Transaction added successfully!");
                        
                        
                        
                        none.style.display= "none"
                        
                      })
                      .catch((error) => {
                        console.error("Error adding transaction: ", error);
                      });
                  })
                  .catch((error) => {
                    console.error("Error updating balance: ", error);
                  });
              }
            } else {
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.log("Error getting document: ", error);
          });
      } else {
      }
    
  });

}
