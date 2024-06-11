// HTML structure for the email signature
const emailSignatureHTML = `
  <div style="width: 1920px; height: 960px; position: relative; background: white">
    <div style="width: 235.50px; height: 960px; left: 0px; top: 0px; position: absolute; background: #6C47D3"></div>
    <div style="left: 48px; top: 433px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex">
      <div style="transform: rotate(-90deg); transform-origin: 0 0; color: white; font-size: 36px; font-family: Reddit Sans Condensed; font-weight: 500; text-transform: uppercase; line-height: 36px; letter-spacing: 8px; word-wrap: break-word">www.tactile.dk</div>
      <img style="width: 64px; height: 64px" src="https://via.placeholder.com/64x64" />
    </div>
    <div class="full-name" style="width: 1136px; left: 305px; top: 60px; position: absolute; color: black; font-size: 249px; font-family: Reddit Sans Condensed; font-weight: 900; text-transform: uppercase; line-height: 249px; word-wrap: break-word"></div>
    <div class="designation" style="left: 305px; top: 585px; position: absolute; color: black; font-size: 64px; font-family: Reddit Sans; font-weight: 700; text-transform: capitalize; line-height: 64px; word-wrap: break-word"></div>
    <div style="left: 305px; top: 818px; position: absolute; opacity: 0.20; color: black; font-size: 64px; font-family: Reddit Sans; font-weight: 700; text-transform: capitalize; line-height: 64px; word-wrap: break-word">CVR 1122123</div>
    <img style="width: 615px; height: 615px; left: 1305px; top: 309px; position: absolute" src="https://via.placeholder.com/615x615" />
  </div>
`;

// Get the input fields for full name and designation
const fullNameInput = document.getElementById('full-name');
const designationInput = document.getElementById('designation');

// Function to generate the email signature
function generateEmailSignature() {
  const fullName = fullNameInput.value;
  const designation = designationInput.value;

  // Replace the placeholder values with the entered values
  const emailSignatureHTMLWithValues = emailSignatureHTML
    .replace('<div class="full-name" style="width: 1136px; left: 305px; top: 60px; position: absolute; color: black; font-size: 249px; font-family: Reddit Sans Condensed; font-weight: 900; text-transform: uppercase; line-height: 249px; word-wrap: break-word">', `<div class="full-name" style="width: 1136px; left: 305px; top: 60px; position: absolute; color: black; font-size: 249px; font-family: Reddit Sans Condensed; font-weight: 900; text-transform: uppercase; line-height: 249px; word-wrap: break-word">${fullName}</div>`)
    .replace('<div class="designation" style="left: 305px; top: 585px; position: absolute; color: black; font-size: 64px; font-family: Reddit Sans; font-weight: 700; text-transform: capitalize; line-height: 64px; word-wrap: break-word">', `<div class="designation" style="left: 305px; top: 585px; position: absolute; color: black; font-size: 64px; font-family: Reddit Sans; font-weight: 700; text-transform: capitalize; line-height: 64px; word-wrap: break-word">${designation}</div>`);

  // Display the generated email signature
  document.getElementById('email-signature').innerHTML = emailSignatureHTMLWithValues;
}

// Add an event listener to the generate button
document.getElementById('generate-button').addEventListener('click', generateEmailSignature);
