export function UserPost({ fullName, age, postText }) {
  return (
    <div>
      <p>
        {fullName}, {age} years old
      </p>
      <p>{postText}</p>
    </div>
  );
}
