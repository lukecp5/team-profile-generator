module.exports = function () {
  return `
  /* Created by: Luke Poirrier under the MIT License. If you'd like to add to the project or modify it, fork the project or create a new feature branch*/ 
  :root{
      --gray: #223843;
      --white: #eff1f3;
      --green: #59a96a;
      --brightoj: #f79256;
      --darkoj: #d77a61;
      font-size: 16px;
      }
      body{
        background-color: white;
        color: white;
        font-family: 'Roboto',sans-serif;
      }
      /* Colors for the page in the form of :root variables*/
      .green-bg{
        background-color: var(--green);
      }
      .white-bg{
        background-color: var(--white);
      }
      .gray-bg{
        background-color: var(--gray);
      }
      .brightoj-bg{
        background-color: var(--brightoj);
      }
      .darkoj-bg{
        background-color: var(--darkoj);
      }
      .green{
        color: var(--green);
      }
      .white{
        color: var(--white);
      }
      .gray{
        color: var(--gray);
      }
      .brightoj{
        color: var(--brightoj);
      }
      .darkoj{
        color: var(--darkoj);
      }
      
      /* End of :root variables section */ 
      
      /* Styling to make the labels look more legible and stand out against the information they represent */
      .label{
        font-weight: bold;
        color: var(--gray) !important;
      }
      /* Overriding Bootstrap 4.3.1 stylings to add a background color and custom text color */
      .list-group-item{
        background-color: var(--green) !important; 
        font-weight: normal;
        color: var(--white) !important;
      }
      /* Add flex-wrap property so the cards don't continue to line up horizontally after the page is filled */
      #team-holder{
        flex-wrap: wrap;
      }
      .team-card{
        justify-content: space-between;
        max-width: 18rem; 
        display: flex;
        flex-direction: column;
        border: none;
        margin: 1rem;
        border-radius: 2rem 2rem 2rem 2rem !important;
        box-shadow: 4px 4px 8px rgba(0,0,0,0.7);
      }
      .card-body{
        border-radius: 0rem 0rem 2rem 2rem !important;
      }
      .team-card a{
        color: var(--white);
        text-decoration: underline;
      }
      .my-team-heading{
        color: var(--gray);
        background-color: var(--green);
        /* border-radius: 2rem 2rem 0rem 0rem !important; */
      }
      h1{
        font-size: 4rem !important;
      }
      h2{
        font-size: 2.8rem !important;
        margin-bottom: 0rem !important;
        font-weight: light !important;
      }
      h3{
        font-size: 1.6rem !important;
      }
      .card-header{
        border-radius: 2rem 2rem 0rem 0rem !important;

      }
      .my-team-heading h2{
        font-weight: 600 !important;
      }
      .my-team-heading h4{
        font-weight: 200 !important;
      }
      `;
};
