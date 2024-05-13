import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text, Button } from "../../components";

export default function FrameTwoPage() {
  return (
    <>
      <Helmet>
        <title>Device Control - Manage Your Settings</title>
        <meta
          name="description"
          content="Efficiently manage your device settings including temperature, sample names, and operational commands like start and stop."
        />
      </Helmet>

      {/* main content section */}
      <div className="w-full pb-[29px] pr-[31px] sm:pb-5 sm:pr-5">
        <div className="bg-gray-50 pr-3.5">
          {/* sidebar and content section */}
          <div className="flex items-center gap-[19px] md:flex-col">
            {/* sidebar section */}
            <div className="relative h-[634px] w-[18%] md:h-auto md:w-full md:p-5">
              <div className="h-[478px] w-full bg-white-A700" />

              {/* device status section */}
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-center gap-2.5 rounded-lg bg-white-A700_01 px-2 pb-[19px] pt-[22px] sm:pt-5">
                <Text size="xs" as="p">
                  Device ID Connected
                </Text>

                {/* device info section */}
                <div className="flex flex-col items-end self-stretch">
                  <div className="flex self-stretch rounded border border-solid border-white-A700_01 bg-white-A700_01 px-9 pt-[5px] sm:px-5">
                    <Heading size="s" as="h1" className="!text-gray-00">
                      MBS00007
                    </Heading>
                  </div>
                  <Img
                    src="images/img_arrow_down.svg"
                    alt="dropdown arrow"
                    className="relative mr-1.5 mt-[-8px] h-[11px] md:mr-0"
                  />
                </div>

                {/* device controls section */}
                <div className="flex flex-col items-center self-stretch">
                  <div className="h-px self-stretch bg-white-A700_01" />
                  <div className="mt-[26px] flex flex-col items-center gap-0.5">
                    <Text size="xs" as="p">
                      Temp:
                    </Text>
                    <Text as="p" className="!text-indigo-800">
                      37.5 C
                    </Text>
                  </div>
                  <div className="mt-[21px] h-px self-stretch bg-white-A700_01" />

                  {/* device options section */}
                  <div className="ml-3.5 mt-[47px] flex w-[54%] flex-col items-end self-start md:ml-0 md:w-full">
                    <div className="flex items-center gap-1.5 self-start">
                      <Img
                        src="images/img_check_3_1.png"
                        alt="checkmark image"
                        className="h-[18px] w-[18px] object-cover"
                      />
                      <Heading size="s" as="h2" className="!font-bold">
                        Select
                      </Heading>
                    </div>
                    <div className="mt-3.5 flex items-center gap-3.5">
                      <Img
                        src="images/img_checkbox_1.png"
                        alt="checkbox image"
                        className="h-[18px] w-[18px] self-end object-cover"
                      />
                      <Text size="xs" as="p" className="!text-gray-700">
                        White
                      </Text>
                    </div>
                    <div className="mt-2.5 flex items-center gap-2.5">
                      <Img
                        src="images/img_overflow_menu.svg"
                        alt="overflow menu image"
                        className="h-[20px] rounded-sm"
                      />
                      <Text size="xs" as="p" className="!text-gray-700">
                        Start
                      </Text>
                    </div>
                    <div className="mt-7 flex w-[77%] items-start gap-[21px] md:w-full">
                      <div className="h-[15px] w-[15px] ml-3 rounded bg-gray-700" />
                      <Text size="xs" as="p" className="!text-gray-700">
                        Stop
                      </Text>
                    </div>
                  </div>

                  {/* device settings link section */}
                  <div className="mt-40 flex items-center gap-2.5">
                    <Img
                      src="images/img_search.svg"
                      alt="search image"
                      className="h-[20px]"
                    />
                    <Heading
                      size="xs"
                      as="h3"
                      className="mb-1 self-end !text-gray-500"
                    >
                      Device Settings
                    </Heading>
                  </div>
                </div>
              </div>
            </div>

            {/* content list section */}
            <div className="flex flex-1 flex-col gap-[19px] md:self-stretch md:p-5">
              {/* device list section */}
              <header className="flex flex-1 cursor-pointer items-center gap-[18px] shadow-xs hover:shadow-xs md:flex-col">
                <div className="flex w-full flex-col items-center rounded-sm border border-solid border-gray-300 bg-white-A700_01">
                  <Text as="p">01</Text>
                  <Text as="p" className="mt-2.5 !text-indigo-800">
                    TSRT1425
                  </Text>
                  <div className="mt-[22px] flex self-stretch">
                    <Button
                      shape="round"
                      className="w-full border border-solid border-indigo-800_3f"
                    >
                      Take white
                    </Button>
                    <Button
                      shape="round"
                      className="w-full rounded-br-sm sm:px-5 bg-blue-900 text-white-A700"
                    >
                      Start
                    </Button>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center gap-[22px] rounded-sm border border-solid border-gray-300 bg-white-A700_01">
                  <div className="flex flex-col items-center gap-2.5">
                    <Text as="p">02</Text>
                    <Text as="p" className="!text-indigo-800">
                      TSRT1425
                    </Text>
                  </div>
                  <div className="flex flex-col items-center self-stretch">
                    <div className="flex self-stretch">
                      <Img
                        src="images/img_rectangle_9.svg"
                        alt="progress bar image"
                        className="relative z-[1] h-[44px] w-[31%] rounded-sm"
                      />
                      <div className="relative ml-[-106px] flex h-[44px] flex-1 items-center justify-end rounded-sm bg-[url(/public/images/img_group_3.svg)] bg-cover bg-no-repeat px-2 pb-[7px] pt-2 md:h-auto">
                        <Text as="p" className="!text-indigo-800">
                          25%
                        </Text>
                      </div>
                    </div>
                    <Heading as="h2" className="relative z-[2] mt-[-43px]">
                      03:34
                    </Heading>
                  </div>
                </div>

                {/* device action prompt section */}
                <div className="w-full rounded-sm border border-solid border-gray-300 bg-white-A700_01">
                  <div className="flex flex-col items-center">
                    <Text as="p">03</Text>
                    <Heading size="s" as="h5" className="relative z-[3]">
                      Stop?
                    </Heading>
                    <Text size="xs" as="p" className="!text-indigo-800">
                      TSRT1425
                    </Text>
                    <div className="mt-2 flex self-stretch">
                      <Button
                        shape="square"
                        className="w-full border border-solid border-indigo-800 sm:px-5"
                      >
                        Yes
                      </Button>
                      <Button shape="round" className="w-full sm:px-5">
                        No
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center gap-[22px] rounded-sm border border-solid border-green-800_59 bg-white-A700_01">
                  <div className="flex flex-col items-center gap-2.5">
                    <Text as="p">04</Text>
                    <Text as="p" className="!text-indigo-800">
                      TSRT1425
                    </Text>
                  </div>
                  <div className="flex flex-col items-center self-stretch">
                    <Img
                      src="images/img_rectangle_9_green_800.svg"
                      alt="status bar image"
                      className="h-[44px] w-full rounded-sm md:h-auto"
                    />
                    <Heading
                      as="h2"
                      className="relative mt-[-43px] !text-white-A700_01"
                    >
                      03:34
                    </Heading>
                  </div>
                </div>
              </header>

              {/* additional device info section */}
              <div className="flex flex-1 cursor-pointer items-center gap-[17px] shadow-xs hover:shadow-xs md:flex-col">
                <div className="flex w-full flex-col items-center rounded-sm border border-solid border-gray-300 bg-white-A700_01">
                  <Text as="p">05</Text>
                  <Text size="xs" as="p" className="mt-[13px] italic">
                    Enter Sample Name
                  </Text>
                  <div className="mt-6 flex self-stretch">
                    <Button
                      shape="round"
                      className="w-full border border-solid border-indigo-800_3f"
                    >
                      Take white
                    </Button>
                    <Button
                      shape="round"
                      className="w-full rounded-br-sm sm:px-5 bg-blue-900 text-white-A700"
                    >
                      Start
                    </Button>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center rounded-sm border border-solid border-gray-300 bg-white-A700_01">
                  <Text as="p">05</Text>
                  <Text size="xs" as="p" className="mt-[13px] italic">
                    Enter Sample Name
                  </Text>
                  <div className="mt-6 flex self-stretch">
                    <Button
                      shape="round"
                      className="w-full border border-solid border-indigo-800_3f"
                    >
                      Take white
                    </Button>
                    <Button
                      shape="round"
                      className="w-full rounded-br-sm sm:px-5 bg-blue-900 text-white-A700"
                    >
                      Start
                    </Button>
                  </div>
                </div>

                {/* device confirmation prompt section */}
                <div className="w-full rounded-sm border border-solid border-gray-300 bg-white-A700_01">
                  <div className="flex flex-col items-center">
                    <Text as="p">03</Text>
                    <Heading size="s" as="h4">
                      White?
                    </Heading>
                    <div className="mt-[31px] flex self-stretch">
                      <Button
                        shape="square"
                        className="w-full border border-solid border-indigo-800 sm:px-5"
                      >
                        Yes
                      </Button>
                      <Button
                        shape="round"
                        className="w-full sm:px-5 bg-blue-900 text-white-A700"
                      >
                        No
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center gap-[22px] rounded-sm border border-solid border-green-800_59 bg-white-A700_01">
                  <div className="flex flex-col items-center gap-2.5">
                    <Text as="p">04</Text>
                    <Text as="p" className="!text-indigo-800">
                      TSRT1425
                    </Text>
                  </div>
                  <div className="flex flex-col items-center self-stretch">
                    <Img
                      src="images/img_rectangle_9_green_800.svg"
                      alt="status bar image"
                      className="h-[44px] w-full rounded-sm md:h-auto"
                    />
                    <Heading
                      as="h5"
                      className="relative mt-[-43px] !text-white-A700_01"
                    >
                      03:34
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 cursor-pointer items-center gap-[18px] shadow-xs hover:shadow-xs md:flex-col">
                <div className="flex w-full flex-col items-center rounded-sm border border-solid border-gray-300 bg-white-A700_01">
                  <Text as="p">01</Text>
                  <Text as="p" className="mt-2.5 !text-indigo-800">
                    TSRT1425
                  </Text>
                  <div className="mt-[22px] flex self-stretch">
                    <Button
                      shape="round"
                      className="w-full border border-solid border-indigo-800_3f"
                    >
                      Take white
                    </Button>
                    <Button
                      shape="round"
                      className="w-full rounded-br-sm sm:px-5 bg-blue-900 text-white-A700"
                    >
                      Start
                    </Button>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center gap-[22px] rounded-sm border border-solid border-gray-300 bg-white-A700_01">
                  <div className="flex flex-col items-center gap-2.5">
                    <Text as="p">02</Text>
                    <Text as="p" className="!text-indigo-800">
                      TSRT1425
                    </Text>
                  </div>
                  <div className="flex flex-col items-center self-stretch">
                    <div className="flex self-stretch">
                      <Img
                        src="images/img_rectangle_9.svg"
                        alt="image"
                        className="relative z-[4] h-[44px] w-[31%] rounded-sm"
                      />
                      <div className="relative ml-[-106px] flex h-[44px] flex-1 items-center justify-end rounded-sm bg-[url(/public/images/img_group_3.svg)] bg-cover bg-no-repeat px-2 pb-[7px] pt-2 md:h-auto">
                        <Text as="p" className="!text-indigo-800">
                          25%
                        </Text>
                      </div>
                    </div>
                    <Heading as="h6" className="relative z-[5] mt-[-43px]">
                      03:34
                    </Heading>
                  </div>
                </div>
                <div className="w-full rounded-sm border border-solid border-gray-300 bg-white-A700_01">
                  <div className="flex flex-col items-center">
                    <Text as="p">03</Text>
                    <Heading size="s" as="h5" className="relative z-[6]">
                      Stop?
                    </Heading>
                    <Text size="xs" as="p" className="!text-indigo-800">
                      TSRT1425
                    </Text>
                    <div className="mt-2 flex self-stretch">
                      <Button
                        shape="square"
                        className="w-full border border-solid border-indigo-800 sm:px-5"
                      >
                        Yes
                      </Button>
                      <Button
                        shape="round"
                        className="w-full sm:px-5 bg-blue-900 text-white-A700"
                      >
                        No
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center gap-[22px] rounded-sm border border-solid border-green-800_59 bg-white-A700_01">
                  <div className="flex flex-col items-center gap-2.5">
                    <Text as="p">04</Text>
                    <Text as="p" className="!text-indigo-800">
                      TSRT1425
                    </Text>
                  </div>
                  <div className="flex flex-col items-center self-stretch">
                    <Img
                      src="images/img_rectangle_9_green_800.svg"
                      alt="image"
                      className="h-[44px] w-full rounded-sm md:h-auto"
                    />
                    <Heading
                      as="h2"
                      className="relative mt-[-43px] !text-white-A700_01"
                    >
                      03:34
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="grid flex-1 cursor-pointer grid-cols-4 justify-center gap-[18px] hover:shadow-xs md:grid-cols-2 sm:grid-cols-1">
                <div className="relative h-[136px] w-full md:h-auto">
                  <div className="flex w-full flex-col items-center">
                    <Text as="p">01</Text>
                    <Text as="p" className="mt-2.5 !text-indigo-800">
                      TSRT1425
                    </Text>
                    <div className="mt-[22px] flex self-stretch">
                      <Button shape="round" className="w-full">
                        Take white
                      </Button>
                      <Button
                        shape="round"
                        className="w-full rounded-br-sm sm:px-5"
                      >
                        Start
                      </Button>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[136px] w-full rounded-sm bg-gray-300_42" />
                </div>
                <div className="relative h-[136px] w-full md:h-auto">
                  <div className="flex w-full flex-col items-center">
                    <Text as="p">01</Text>
                    <Text as="p" className="mt-2.5 !text-indigo-800">
                      TSRT1425
                    </Text>
                    <div className="mt-[22px] flex self-stretch">
                      <Button shape="round" className="w-full">
                        Take white
                      </Button>
                      <Button
                        shape="round"
                        className="w-full rounded-br-sm sm:px-5"
                      >
                        Start
                      </Button>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full justify-center rounded-sm bg-gray-300_c4 px-[33px] pb-[39px] pt-[33px] sm:p-5">
                    <Img
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                      className="h-[64px] w-[48%]"
                    />
                  </div>
                </div>
                <div className="flex w-full justify-center rounded-sm bg-white-A700_01">
                  <div className="flex w-full flex-col items-center">
                    <Text as="p">03</Text>
                    <Heading size="s" as="h5" className="relative z-[7]">
                      Stop?
                    </Heading>
                    <Text size="xs" as="p" className="!text-indigo-800">
                      TSRT1425
                    </Text>
                    <div className="mt-2 flex self-stretch">
                      <Button shape="round" className="w-full sm:px-5">
                        Yes
                      </Button>
                      <Button shape="round" className="w-full sm:px-5">
                        No
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center gap-[22px] rounded-sm bg-white-A700_01">
                  <div className="flex flex-col items-center gap-2.5">
                    <Text as="p">04</Text>
                    <Text as="p" className="!text-indigo-800">
                      TSRT1425
                    </Text>
                  </div>
                  <div className="flex flex-col items-center self-stretch">
                    <Img
                      src="images/img_rectangle_9_green_800.svg"
                      alt="image"
                      className="h-[44px] w-full rounded-sm md:h-auto"
                    />
                    <Heading
                      as="h2"
                      className="relative mt-[-43px] !text-white-A700_01"
                    >
                      03:34
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
