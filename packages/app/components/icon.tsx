import { TokenTicker } from '../constants';
import Image from 'next/image';

export function Favicon({ url }) {
  return (
    <img
      referrerPolicy="no-referrer"
      className="inline h-4"
      src={`https://icons.duckduckgo.com/ip3/${url}.ico`}
    />
  );
}

export const TokenIcons = {
  [TokenTicker.CELO]: (props: any) => (
    <>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        style={{ enableBackground: 'new 0 0 100 100', borderRadius: '100%' }}
        xmlSpace="preserve"
        {...props}
      >
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '\n\t.st0{fill:#FBCC5C;}\n\t.st1{fill:#F9B73E;}\n\t.st2{fill:#FFFFFF;}\n',
          }}
        />
        <desc>Symbol for the Celo Gold currency</desc>
        <path className="st0" d="M0,0h100v100H0V0z" />
        <g>
          <path
            className="st1"
            d="M79.4,44c0-13-10.5-23.5-23.5-23.5c-9.6,0-17.9,5.8-21.5,14.1C26.2,38.3,20.5,46.5,20.5,56
		C20.5,69,31,79.5,44,79.5c9.6,0,17.9-5.8,21.5-14.1C73.8,61.8,79.4,53.6,79.4,44z M59.7,59.5c-1.2,0.3-2.4,0.4-3.6,0.4
		c-8.8,0-15.9-7.2-15.9-15.9c0-1.2,0.1-2.3,0.4-3.4c1.2-0.3,2.4-0.4,3.6-0.4c8.8,0,15.9,7.1,15.9,15.9C60,57.3,59.9,58.4,59.7,59.5z
		 M28.2,56.1c0-4.3,1.7-8.1,4.4-11C33.2,57.3,43,67,55.2,67.5c-2.9,2.8-6.8,4.6-11.1,4.6C35.3,72,28.2,64.9,28.2,56.1z M67.6,55
		C67,42.8,57.2,33.1,45,32.6c2.9-2.8,6.8-4.6,11.1-4.6C64.9,28,72,35.1,72,43.9C71.9,48.3,70.2,52.2,67.6,55z"
          />
          <path
            className="st2"
            d="M78.6,44c0-12.4-10.1-22.5-22.5-22.5c-9.4,0-17.4,5.7-20.8,13.9c-8,3.4-13.7,11.4-13.7,20.7
		c0,12.4,10.1,22.5,22.5,22.5c9.4,0,17.4-5.7,20.8-13.9C72.8,61.3,78.6,53.3,78.6,44z M44.1,73c-9.3,0-16.9-7.6-16.9-16.9
		c0-5.3,2.5-10.1,6.4-13.2c0,0.4,0,0.8,0,1.1c0,12.4,10.1,22.5,22.5,22.5c0.5,0,0.9,0,1.4,0C54.3,70.5,49.5,73,44.1,73z M60.5,60.3
		c-1.4,0.4-2.9,0.6-4.4,0.6c-9.3,0-16.9-7.6-16.9-16.9c0-1.5,0.2-2.9,0.6-4.2c1.4-0.4,2.9-0.6,4.4-0.6c9.3,0,16.9,7.6,16.9,16.9
		C61,57.6,60.8,59,60.5,60.3z M66.6,57.2c0-0.4,0-0.8,0-1.1c0-12.4-10.1-22.5-22.5-22.5c-0.5,0-0.9,0-1.4,0c3.1-4,7.9-6.5,13.3-6.5
		c9.3,0,16.9,7.6,16.9,16.9C72.9,49.4,70.4,54.1,66.6,57.2z"
          />
        </g>
      </svg>
    </>
  ),
  [TokenTicker.cUSD]: (props: any) => (
    <>
      <svg
        width={100}
        height={100}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid meet"
        {...props}
      >
        <desc>Celo US Dollar Currency Symbol</desc>
        <circle fill="#45CD85" cx={500} cy={500} r={500} />
        <path
          d="M479 772c104 0 196-69 226-170h-81c-25 57-82 94-145 94-88 0-159-71-159-159 0-63 37-120 94-145v-81c-101 30-170 122-170 226 0 129 106 235 235 235zm139-297v-57c22 7 30 15 30 27 0 14-11 25-30 30zm-58 98h60v-32c59-10 97-47 97-96 0-68-52-86-99-95v-66c24 4 49 13 71 26v-74c-23-9-46-14-69-16v-31h-60v31c-59 10-96 45-96 93 0 68 51 88 98 97v65c-27-6-58-18-96-40v76c32 17 64 27 94 30v32zm2-232c-21-6-29-14-29-28s10-24 29-28v56z"
          fill="#35C071"
        />
        <path
          d="M479 762c98 0 181-63 212-150h-61c-27 56-85 94-151 94-93 0-169-76-169-169 0-66 38-124 94-151v-61c-87 31-150 114-150 212 0 124 101 225 225 225zm129-275v-82c28 7 50 16 50 40 0 22-19 38-50 42zm-38 76h40v-31c59-7 97-41 97-87 0-64-51-78-99-87v-85c23 2 48 9 71 20v-50c-22-8-46-13-69-14v-30h-40v30c-61 7-96 41-96 84 0 65 50 80 98 89v85c-29-4-60-16-96-35v53c31 15 63 25 94 27v31zm2-209c-28-6-49-16-49-41 0-23 18-37 49-40v81z"
          fill="#FFF"
        />
      </svg>
    </>
  ),
  [TokenTicker.cEUR]: (props: any) => (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid meet"
        {...props}
      >
        <desc>Celo Euro Currency Symbol</desc>
        <circle fill="#45CD85" cx={500} cy={500} r={500} />
        <path
          d="M670 468l18-60H527v-15h166l18-60H546c18-27 49-42 88-42 28 0 56 8 83 25l20-65c-29-17-66-26-103-26-75 0-137 41-163 107h-44l-19 58h51v21h-32l-19 58h64c25 65 86 106 161 106 36 0 71-10 100-30v-79c-29 28-63 43-99 43-38 0-68-15-87-41h123zM445 714c-88 0-159-71-159-159 0-63 37-120 94-145v-81c-101 30-170 122-170 226 0 129 106 235 235 235 104 0 196-69 226-170h-81c-25 57-82 94-145 94z"
          fill="#35C071"
        />
        <path
          d="M445 780c98 0 181-63 212-150h-61c-27 56-85 94-151 94-93 0-169-76-169-169 0-66 38-124 94-151v-61c-87 31-150 114-150 212 0 124 101 225 225 225zm188-215c33 0 64-9 90-25v-52c-25 19-55 31-89 31-48 0-86-23-104-61h133l12-40H518c-1-6-1-11-1-17s0-12 1-18h168l12-40H529c18-39 55-62 105-62 27 0 53 7 77 20l14-45c-27-14-59-21-91-21-75 0-134 43-156 107h-44l-12 38h48c-1 7-1 14-1 21s0 13 1 20h-36l-12 38h57c21 64 79 106 154 106z"
          fill="#FFF"
        />
      </svg>
    </>
  ),
  [TokenTicker.vMOJO]: (props: any) => <Image src="/keykoin.jpg" {...props} />,
  [TokenTicker.PesabaseDollar]: (props: any) => (
    <Image src="/pesabase.jpg" {...props} />
  ),
  [TokenTicker.Ubeswap]: (props: any) => (
    <Image src="/ubeswap.png" {...props} />
  ),
  [TokenTicker.Unifty]: (props: any) => <Image src="/unifty.jpg" {...props} />,
  [TokenTicker.cMC02]: (props: any) => <Image src="/moss.png" {...props} />,
};
