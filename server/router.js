const DummyFunction = (req, res) => {
  const data = module.exports.myCoolFunction(req.body)

  res.status(200).json(data)
}

const MoodFunction = (data) => {
  if(data === 'happy'){
    return { mood: 'sadness' }
  } else {
    return { mood: 'happy' }
  }
}

module.exports = {
  DummyFunction,
  MoodFunction
}