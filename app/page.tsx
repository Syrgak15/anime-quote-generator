import GeneratorField from "@/components/GeneratorField/GeneratorField";
import ResultFieldServerComponent from "@/components/ResultField/ResultFieldServerComponent";

export default function Home() {
  return (
      <div
          className="quote min-h-screen bg-cover bg-center"
          style={{backgroundImage: "url('/quote-generator-bg.jpg')"}}
      >
          <div className="quote__content relative z-10">
              <div className="quote__generator-field pt-[10px]">
                    <GeneratorField />
              </div>
              <div className="quote__result-field pt-[10px]">
                     <ResultFieldServerComponent/>
              </div>
          </div>
      </div>
  );
}
