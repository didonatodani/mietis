import ColorsContainer from "../components/ColorsContainer";
import BagsContainer from "../components/BagsContainer";
import NameTag from "../components/NameTag";

const CreateBagPage = ({
  selectedBag,
  setSelectedBag,
  isDisabled,
  setIsDisabled,
  colorsSelectionArray, 
  setColorsSelectionArray
}) => {
  return (
    <div className="main-container">
      <BagsContainer

        selectedBag={selectedBag}

        setSelectedBag={setSelectedBag}
  
      />
      <ColorsContainer
        colorsSelectionArray={colorsSelectionArray}
        setColorsSelectionArray={setColorsSelectionArray}
      />
      <NameTag isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
    </div>
  );;
};

export default CreateBagPage;
