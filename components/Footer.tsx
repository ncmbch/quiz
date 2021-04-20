import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="fixed w-full bottom-0 px-4 py-2 bg-white shadow flex text-blueGray-500 text-sm">
      <p className="flex-1">
        <a
          href="https://miebach.one"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-lightBlue-500 hover:underline"
        >
          &copy; {new Date().getFullYear()} Nico Miebach
        </a>
      </p>
      <p>
        <a
          href="https://github.com/ncmbch/quiz"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-lightBlue-500 hover:underline"
        >
          made with <FontAwesomeIcon icon={faHeart} />
        </a>
      </p>
    </footer>
  );
}
