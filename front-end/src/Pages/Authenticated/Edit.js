import AuthEditSnack from "../../Components/Authenticated/Edit/EditSnack";

function Edit({ user }) {
  return (
    <div className="New Edit">
      <AuthEditSnack user={user} />
    </div>
  );
}

export default Edit;
