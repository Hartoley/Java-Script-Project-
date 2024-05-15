
  gen1 = "";
  gen2 = "";
  gen3 = "";
  gen4 = "";
  
  senditt2.innerHTML = `
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span class="visually-hidden" role="status">Loading...</span>
  `;


    firebase.auth().onAuthStateChanged((user) => {
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
              

              if (airtimeamt.value > 1200) {
                alert("Insufficient Balance");
              } else if (
                `${p1.value}${p2.value}${p3.value}${p4.value}` !==
                doc.data().pin
              ) {
                alert("Incorrect PIN");
                p1.value = "";
                p2.value = "";
                p3.value = "";
                p4.value = "";

               
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
                      console.log(randomnumber);
                      gen += randomnumber;
                    }
                    for (let inde1 = 0; inde1 < 4; inde1++) {
                      randomnumber = Math.floor(Math.random() * 10);
                      console.log(randomnumber1);
                      gen1 += randomnumber1;
                    }
                    for (let inde2 = 0; inde2 < 4; inde2++) {
                      randomnumber = Math.floor(Math.random() * 10);
                      console.log(randomnumber2);
                      gen2 += randomnumber2;
                    }
                    for (let inde3 = 0; inde3 < 4; inde3++) {
                      randomnumber = Math.floor(Math.random() * 10);
                      console.log(randomnumber2);
                      gen3 += randomnumber3;
                    }
                    for (let inde3 = 0; inde4 < 4; inde4++) {
                      randomnumber = Math.floor(Math.random() * 10);
                      console.log(randomnumber4);
                      gen4 += randomnumber4;
                    }

                    db.collection("transaction")
                      .add({
                        receiverEmail: "",
                        senderEmail: "",
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
                        
                      })
                      .then(() => {
                        thereceiver2.innerHTML = phonenum.value;
                        showamt2.innerHTML = airtimeamt.value;
                        key1.innerHTML = gen1
                        key2.innerHTML = gen2
                        key3.innerHTML = gen3
                        key4.innerHTML = gen4
                        type.innerHTML = "Purchase of debit card";
                        yes.innerHTML = "successful";
                        p1.value = "";
                        p2.value = "";
                        p3.value = "";
                        p4.value = "";
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
                        <p class="treceipt" id="Type">Transaction Type: <span>Card Purchase</span></p>
                        <p class="treceipt" id="Amount">Amount: <span>&#8358 1 200</span></p>
                        <p class="treceipt" id="Senderacc">Card: <span>Debit</span></p>
                        <p class="treceipt" id="Type">Transaction Id: <span>${gen}</span></p>

                        
                        `;
                        // inputre.value =""
                        console.log("Transaction added successfully!");
                        name.innerHTML = `${doc.data().first} ${doc.data().last}`
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
    
  });
