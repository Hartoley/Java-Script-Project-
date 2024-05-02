
function transactionHistory() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
  
        db.collection("transaction")
          .orderBy("date", "desc") 
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              const date = doc.data().date.toDate();
              const year = date.getFullYear();
              const month = (date.getMonth() + 1).toString().padStart(2, "0");
              const day = date.getDate().toString().padStart(2, "0");
              const hour = date.getHours().toString().padStart(2, "0");
              const minute = date.getMinutes().toString().padStart(2, "0");
              const second = date.getSeconds().toString().padStart(2, "0");
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
  
              if (doc.data().receiverEmail === user.email) {
                if (doc.data().type === "Fund by rave") {
                  lasttransactions.innerHTML += `
                    <div id="lasttrans">
                      <img id="creditimg" src="images/images/credit2.png" alt="">
                      <h4 id="lastp"> ${doc.data().senderName}<h4/>
                      <p id="lastpp">+ N ${doc.data().transferAmount}<p/>
                    </div>
                  `;
                } else if (doc.data().type === "fund") {
                  lasttransactions.innerHTML += `
                    <div id="lasttrans">
                      <img id="debitimg" src="images/images/debit.png" alt="">
                      <h4 id="lastp"> ${doc.data().receiverName}<h4/>
                      <p id="lastpp">- N ${doc.data().transferAmount}<p/>
                    </div>
                  `;
                } else if (doc.data().type === "airtime") {
                  lasttransactions.innerHTML += `
                    <div id="lasttrans">
                      <img id="debitimg" src="images/images/credit2.png" alt="">
                      <h4 id="lastp"> ${doc.data().receipientNum}<h4/>
                      <p id="lastpp">- N ${doc.data().amount}<p/>
                    </div>
                  `;
                }
  
                tbody1.innerHTML += `  
                  <tr id="tab">
                    <td>${doc.data().type === "Fund by rave" ? "Credit" : "Debit"}</td>
                    <td>${doc.data().receiverName}</td>
                    <td>${doc.data().transferAmount}</td>
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