import Link from "next/link";

export default function Card() {
  return (
    <div>
      <div className="card mx-auto">
        <div className="card-content">
          <h3>Valuable Info</h3>
          <h1>The worst thing about coding is the dementors</h1>
          <p>
            I can`t stand when I have spent the last 47 minutes adjusting the
            rgb on my gradient only to have a dementor appear and suck my soul
            out.
          </p>
        </div>
      </div>

      <div id="links">
        <div className="meta-link">
          <span className="label">Links</span>
          <span className="dot">·</span>
          <Link className="source" href="https://chroniclehq.com/" target="_blank">
            Some
          </Link>
          <span className="dot">·</span>
          <Link
            className="youtube"
            href="https://youtu.be/CqndlPZkjqY"
            target="_blank"
          >
            YT
          </Link>
        </div>
      </div>
    </div>
  );
}
