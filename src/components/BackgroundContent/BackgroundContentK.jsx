import React from "react";
import kinder from "../../assets/kinder.png";

function BackgroundContentK() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="font-semibold md:text-[16px] sm:text-sm text-xs text-gray-300">
        The School Curriculum and Standards Authority (the Authority) is
        responsible for curriculum, policy advice and guidelines for all Western
        Australian schools from Kindergarten to Year 12. The Kindergarten
        Curriculum Guidelines (the Guidelines) reinforce the themes of the
        Authority’s Kindergarten and Pre-primary Statement for Western Australia
        and the Guiding Principles for Western Australian schools stated in the
        Western Australian Curriculum and Assessment Outline (the Outline –
        <a
          href="http://www.scsa.wa.edu.au/"
          target="_blank"
          className="underline"
        >
          http://www.scsa.wa.edu.au/
        </a>
        ).
      </p>
      <br></br>
      <p className="font-semibold md:text-[16px] sm:text-sm text-xs text-gray-300">
        <span className="font-bold text-[#0582ca]">Belonging</span> –
        Experiencing belonging – knowing where and with whom you belong – is
        integral to human existence. Children belong to diverse families,
        neighbourhoods, and local and global communities.
      </p>
      <br></br>
      <p className="font-semibold md:text-[16px] sm:text-sm text-xs text-gray-300">
        <span className="font-bold text-[#0582ca]">Being</span> – Childhood is a
        time to be, to seek and make meaning of the world. Being recognises the
        significance of the present, as well as the past, in children’s lives.
      </p>
      <br></br>
      <p className="font-semibold md:text-[16px] sm:text-sm text-xs text-gray-300">
        <span className="font-bold text-[#0582ca]">Becoming</span> – Children’s
        identities, knowledge, understandings, dispositions, capabilities,
        skills and relationships change during childhood.
      </p>
      <br></br>
      <img
        src={kinder}
        alt="Kindergarten Curriculum Guidelines and the Western
Australian curriculum."
        className="w-[60vw] md:w-[40vw] rounded-2xl"
      />
    </div>
  );
}

export default BackgroundContentK;
