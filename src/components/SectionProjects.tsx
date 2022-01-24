import CardProject from "./CardProject";
import bitkinUrl from "../assets/bitkin.jpg";
import scriptGuruUrl from "../assets/script-guru.jpg";
import scriptGuruToolsUrl from "../assets/script-guru-tools.jpg";
import vMaskUrl from "../assets/v-mask.jpg";
import websiteUrl from "../assets/website.jpg";
import oldWebsiteUrl from "../assets/old-website.jpg";

const SectionProjects = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-violet-800 to-violet-600">
      <div className="container mx-auto py-10">
        <div className="mx-4">
          <h1 className="font-light text-5xl text-white mb-10">Projects</h1>

          <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <CardProject
              href="https://github.com/davismcphee/bitkin"
              backgroundImageUrl={bitkinUrl}
              title="Bitkin"
              description="A Fitbit watch face featuring customizable animated characters, daily activity stats, and a live heart rate display."
            />

            <CardProject
              href="https://github.com/davismcphee/script-guru"
              backgroundImageUrl={scriptGuruUrl}
              title="ScriptGuru"
              description="A website built with Vue.js and VuePress to document the Lua scripting API of the GameGuru MAX game engine."
            />

            <CardProject
              href="https://github.com/davismcphee/script-guru-tools"
              backgroundImageUrl={scriptGuruToolsUrl}
              backgroundImagePosition="top"
              title="ScriptGuru Tools"
              description="A Vue.js, Vuetify, and Electron-based application including several utilities for the GameGuru MAX game engine such as a 3D file converter and a file explorer."
            />

            <CardProject
              href="https://github.com/probil/v-mask"
              backgroundImageUrl={vMaskUrl}
              backgroundImagePosition="top"
              title="v-mask (Contributor)"
              description="Contributed a feature that added custom placeholders, transform functions, and regular expression support to an open-source Vue.js input masking library with over 5M total downloads."
            />

            <CardProject
              href="https://github.com/davismcphee/davismcphee.github.io"
              backgroundImageUrl={websiteUrl}
              title="This Website"
              description="This website was built using Vite, TypeScript, React, and Tailwind CSS."
            />

            <CardProject
              href="https://github.com/davismcphee/old.davismcphee.github.io"
              backgroundImageUrl={oldWebsiteUrl}
              backgroundImagePosition="top"
              title="My Old Website"
              description="My old website was built using Spectre.css as a portfolio project during my second year of the Application Development program at Nova Scotia Community College."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionProjects;
