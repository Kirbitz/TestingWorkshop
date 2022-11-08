const DummyFunction = (req, res) => {
  console.log(req.body)
  if(Object.keys(req.body).length > 0){
    const data = module.exports.MoodFunction(req.body.inputValue)
    res.status(200).json(data)
  } else {
    res.status(400).json({
      error: 'Please pass a value to the input field'
    })
  }
}

const MoodFunction = (inputVal) => {
  if(inputVal === 'happy'){
    return { mood: 'sadness' }
  } else {
    return { mood: 'happy' }
  }
}

module.exports = {
  DummyFunction,
  MoodFunction
}