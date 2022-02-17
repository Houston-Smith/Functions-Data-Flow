
const createWoodBlock = (blockMateiral) => {
  const woodBlock = {
    weight: "heavy",
    shape: "square",
    material: blockMateiral,
    quality: "exceptional"
  }
  return woodBlock
}

const createBeautifulCarving = (woodBlock) => {
  const stringRepresentation = `The ${woodBlock.weight}, ${woodBlock.shape} ${woodBlock.material} carving is of ${woodBlock.quality} quality.`

  return stringRepresentation
}

const pineBlock = createWoodBlock("pine")

const pineBlockString = createBeautifulCarving(pineBlock)

console.log(pineBlockString)
