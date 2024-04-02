import React, { useEffect, useState } from "react";
import PassCards from "../PassCards/PassCards";
import appwriteService from "../../appwrite/config";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";

function Hero() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [passwords, setPasswords] = useState({
    website_url: "",
    username: "",
    email: "",
    password: "",
  });
  const [allPasswords, setAllPasswords] = useState([]);
  console.log(passwords);
  const addPassword = async () => {
    const res = await appwriteService.addPassword({ ...passwords });
    console.log(res);
  };

  useEffect(() => {
    (async () => {
      const res = await appwriteService.getAllPasswords();
      console.log(res);
      setAllPasswords(res.documents);
      console.log(allPasswords);
    })();
  }, []);

  return (
    <div className="w-full h-full px-3 lg:px-10 md:px-8 py-5 flex flex-col justify-center items-center gap-1">
      <div className="w-full h-1/2 flex flex-col justify-center items-center gap-5 tracking-tighter py-2 px-7">
        <h1 className="text-5xl font-bold text-gray-200">Keep your password</h1>

        <h1 className="text-6xl font-bold bg-gradient-to-r from-rose-400 from-10% via-rose-600 via-40% to-purple-600 bg-clip-text text-transparent">
          PassArmor
        </h1>
        <button
          onClick={onOpen}
          className="bg-gradient-to-r from-rose-400 from-10% via-rose-600 via-40% to-purple-600 rounded-md px-[2px] hover:py-[.5px] duration-500"
        >
          <h1 className="h-full w-full bg-zinc-950 text-gray-200 px-4 py-1 rounded-md font-semibold text-sm">
            <>
              Add password
              <Modal
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                motionProps={{
                  variants: {
                    enter: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                      },
                    },
                    exit: {
                      y: -20,
                      opacity: 0,
                      transition: {
                        duration: 0.2,
                        ease: "easeIn",
                      },
                    },
                  },
                }}
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">
                        Add your details
                      </ModalHeader>
                      <ModalBody>
                        <Input
                          autoFocus
                          label="Website url"
                          placeholder="Enter your website url"
                          variant="bordered"
                          value={passwords.website_url}
                          onChange={(e) => {
                            setPasswords({
                              ...passwords,
                              website_url: e.target.value,
                            });
                          }}
                          required={true}
                        />
                        <Input
                          autoFocus
                          label="Username"
                          placeholder="Enter your username"
                          variant="bordered"
                          value={passwords.username}
                          onChange={(e) => {
                            setPasswords({
                              ...passwords,
                              username: e.target.value,
                            });
                          }}
                        />
                        <Input
                          autoFocus
                          label="Email"
                          placeholder="Enter your email"
                          variant="bordered"
                          value={passwords.email}
                          onChange={(e) => {
                            setPasswords({
                              ...passwords,
                              email: e.target.value,
                            });
                          }}
                        />
                        <Input
                          label="Password"
                          placeholder="Enter your password"
                          type="password"
                          variant="bordered"
                          value={passwords.password}
                          onChange={(e) => {
                            setPasswords({
                              ...passwords,
                              password: e.target.value,
                            });
                          }}
                        />
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Close
                        </Button>
                        <Button
                          onClick={addPassword}
                          color="primary"
                          onPress={onClose}
                        >
                          Action
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </>
          </h1>
        </button>
      </div>
      <div className="w-full h-1/2 overflow-hidden">
        <div className="w-full h-full gap-2 px-1 lg:px-5 py-5 flex flex-col justify-start items-center overflow-y-scroll">
          {allPasswords.map((pass) => (
            <PassCards
              id={pass.$id}
              website={pass.website_url}
              username={pass.username}
              email={pass.email}
              password={pass.password}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
