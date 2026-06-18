import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PaymenTabs } from "../data/PaymentTabs";
import { ArrowRightIcon } from "lucide-react";

export default function PaymentSolutions() {
  return (
    <div className="font-raleway max-w-screen-2xl mx-auto text-center  mt-50 ">
      {/* Article */}
      <div className="">
        <h2 className="font-bold text-[42px] flex justify-center text-gray mt-6">
          Payment Solutions for All Business Needs
        </h2>
        <p className="text-lg color-gray flex justify-center">
          ABA PayWay is developed for businesses of all sizes. Regardless of
          business type and its <br /> offerings you can easily accept cashless
          payments in both KHR and USD currencies.
        </p>
      </div>

      {/*Tabs Section */}

      <div>
        <div className="px-20 w-full mt-5    justify-center">
          <Tabs
            defaultValue="online"
            className="w-full flex flex-col items-center"
          >
            <TabsList
              className=" w-full h-auto p-0 bg-transparent rounded-none
              border-b-4 border-gray-50 flex justify-between "
            >
              {PaymenTabs.map((item) => (
                <TabsTrigger
                  key={item.id}
                  value={item.id}
                  className="bg-transparent rounded-none py-6 px-0
                  min-w-[200px]
                  text-gray-500  uppercase font-medium text-xl  

                  data-[state=active]:text-cyan-500 
                  data-[state=active]:border-b-4 
                  data-[state=active]:border-b-cyan-500

                  /* Hover effecti */
                  hover:text-cyan-400 transition-all
                  "
                >
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* card */}
            {PaymenTabs.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-6 "
              >
                <div className="w-full text-left">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {category.cards.map((card) => {
                      return (
                        <div
                          className="p-8 rounded-[24px] bg-[#f8fbff] text-left relative 
                          flex flex-col justify-between  border border-transparent 
                          hover:bg-gradient-to-r from-[#438BB0] to-[#11bcd4] 
                          duration-300 group  w-100 "
                        >
                          {/* Icon */}
                          <div className="flex justify-between items-start mb-6 w-full">
                            <div
                              className="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-white
                              flex items-center justify-center shadow-sm text-sky-800 border border-gray-50"
                            >
                              {card.icon}
                            </div>
                            <ArrowRightIcon
                              size={18}
                              className="text-sky-800  group-hover:text-white"
                            />
                          </div>
                          <h2 className="text-[22px] text-gray-600 group-hover:text-white font-semibold ">
                            {card.title}
                          </h2>
                          <p className="text-gray-700 group-hover:text-white  text-[18px] font-medium leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
