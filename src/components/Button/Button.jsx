import './Button.css'

export default function Button({ name }) {
  return (
    <button className='custom-button '>
      {name}
    </button>
  );
}
