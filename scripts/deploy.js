const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    [ "Ursula Trujillo", 
      "Katrina Cabrera", 
      "Dewey Arroyo",
      "Tyler Allison",
      "Cherry Parsons",
      "Jeffry Lawrence",
      "Tristan Pierce", 
      "Deana Brandt", 
      "Chad Robinson", 
      ], // Names
    [ "https://i.imgur.com/xlpIlRi.png", 
      "https://i.imgur.com/aHuqnUy.png", 
      "https://i.imgur.com/2LnK3RL.png",
      "https://i.imgur.com/JLlpDa6.png",
      "https://i.imgur.com/MO2ZfY9.png",
      "https://i.imgur.com/GDeUThX.png",
      "https://i.imgur.com/xnjtkzl.png", 
      "https://i.imgur.com/JyBHQDr.png", 
      "https://i.imgur.com/hObrat4.png"
  ], // Images
    [ 50, 
      75, 
      100,
      125,
      150,
      175, 
      200,
      225,
      250
  ], // HP values
    [ 250, 
      225, 
      200,
      175,
      150,
      125,
      100,
      75,
      50
  ], // Attack damage values,
  "Boss Tycoon", // Boss name
  "https://i.imgur.com/VdMFlgf.png", // Boss image
  10000, // Boss hp
  50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();