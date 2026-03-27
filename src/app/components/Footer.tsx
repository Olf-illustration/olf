export default function Footer() {
  return (
    <div className="bg-[#faf9f9] content-stretch flex flex-col items-start pb-[80px] pt-[81px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#eee] border-solid border-t inset-0 pointer-events-none" />
      <div className="max-w-[1536px] relative shrink-0 w-full" data-name="Container">
        <div className="flex flex-row items-center max-w-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[32px] relative w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
              <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#212121] text-[18px] tracking-[1.8px] uppercase w-[168.97px]">
                <p className="leading-[28px]">OLF</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[32px] h-[20px] items-start relative shrink-0" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
                <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] w-[95.39px]">
                  <p className="leading-[20px]">©2026 OLF</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
                <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] w-[87.98px]">
                  <p className="leading-[20px]">Lille, France</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
