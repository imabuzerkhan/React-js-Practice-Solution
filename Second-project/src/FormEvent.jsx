function SubmitForm(event){
  event.preventDefault();
  console.log("form was submitted")
}

export function Form(){
 
  return (
    <form  onSubmit={SubmitForm}>
      <input type="text" placeholder="Enter somethig" />
      <button>Submit</button>
    </form>
  )
}