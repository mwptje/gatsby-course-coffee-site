import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm mx-auto text-center">
            <p className="lead text-muted mb-5">
              Following John Smilga's course on Gatsby Development - Using
              Gatsby | React | Graphql. This project uses Contentful as a CMS
              provider and Netlify as a hosting provider. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Reiciendis, magni. Similique in
              qui, magnam aperiam nam earum sit mollitia eos excepturi sunt
              illum, dolores obcaecati quaerat vel ex error facilis. Ullam
              totam, doloribus modi ipsam voluptatibus ab repellat tempora est
              culpa mollitia sapiente officia fugiat quod! Sapiente commodi quia
              dolore.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
