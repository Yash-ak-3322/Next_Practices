function User({ user }) {
  return (
    <>
      <div>
        {user.name} :- {user.username}
        <p className="mx-5"> contact : {user.website} </p>
        <hr /> <br />
      </div>
    </>
  );
}

export default User;
