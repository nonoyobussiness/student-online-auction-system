import { Badge } from "../ui";

export default function AuctionCardPreview() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1e23]">
      
      <div className="flex gap-6">
        
        {/* Card 1 (unchanged) */}
        <div className="w-[230px] h-[290px] rounded-[10px] bg-[#0f2a30] border border-[#1f3a40] flex flex-col">
          
          <div className="relative h-[176px] bg-[#7f7f7f] rounded-[10px]">
            <div className="absolute left-2 top-2 z-10">
              <Badge variant="live" theme="dark" size="desktop" />
            </div>
          </div>

          <div className="flex flex-col justify-between flex-1 p-3">
            
            <div>
              <p className="text-[22px] font-jetbrains-mono text-orange-400 tracking-wider -mt-2">
                00:23:44
              </p>
              <p className="text-[8px] text-gray-400 -mt-2">
                Remaining
              </p>
              <p className="text-[10px] text-gray-300 mt-2">
                Product Title
              </p>
            </div>

            <div className="flex items-center justify-between mt-2">
              <div>
                <p className="text-[8px] text-gray-400">Current Bid</p>
                <p className="text-[21px] font-bold -mt-1.5">
                  <span className="font-extrabold text-[#20B2B2] font-bold">
                    U
                  </span>
                  <span className="text-white ml-[3px] font-jetbrains-mono">95</span>
                </p>
              </div>

              <button className="bg-[#20B2B2] hover:bg-[#20B2B2] text-black text-[12px] px-4 py-1.5 rounded-full font-medium">
                Place Bid
              </button>
            </div>

          </div>
        </div>

        {/* Card 2 (light version) */}
        <div className="w-[230px] h-[290px] rounded-[10px] bg-[#cfcfcf] border border-[#b5b5b5] flex flex-col">
          
          <div className="relative h-[176px] bg-[#7f7f7f] rounded-[10px]">
            <div className="absolute left-2 top-2 z-10">
              <Badge variant="ended" theme="light" size="desktop" />
            </div>
          </div>

          <div className="flex flex-col justify-between flex-1 p-3">
            
            <div>
              <p className="text-[22px] font-jetbrains-mono text-orange-500 tracking-wider -mt-2">
                00:23:44
              </p>
              <p className="text-[8px] text-gray-600 -mt-2">
                Remaining
              </p>
              <p className="text-[10px] text-gray-800 mt-2">
                Product Title
              </p>
            </div>

            <div className="flex items-center justify-between mt-2">
              <div>
                <p className="text-[8px] text-gray-600">Current Bid</p>
                <p className="text-[21px] font-bold -mt-1.5">
                  <span className="font-extrabold text-cyan-500 font-bold">
                    U
                  </span>
                  <span className="text-black ml-[3px] font-jetbrains-mono">95</span>
                </p>
              </div>

              <button className="bg-[#e6e6e6] text-[#357E7E] text-[12px] px-4 py-1.5 rounded-full font-medium">
                Place Bid
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
