const Item = require('../../models/item');
const uuid = require('uuid');
const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");
const BASE_URL = process.env.S3_BASE_URL;
const BUCKET = process.env.S3_BUCKET;
const REGION = process.env.REGION;


module.exports = {
  index,
  create, 
  update,
  delete: deleteItem
};

async function index(req, res) {
  const items = await Item.find({}).populate('category').exec();
  res.json(items);
}

async function create(req, res) {
  console.log('Here', req.file);
  const AWSData = await getNewImageUrl(req.file);
  const created = await Item.create({
    ...req.body,
    AWSKey: AWSData.key,
    imageURL: AWSData.url
  });
  const item = await Item.findById(created._id).populate('category').exec();
  res.json(item);
}

async function update(req,res) {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true})
  res.json(item);
}

async function deleteItem(req, res) {
  const item = await Item.findByIdAndDelete(req.params.id)
  res.json(item);
}

// Helper Functions

async function getNewImageUrl(image, edit, key) {
  const hex = uuid.v4().slice(uuid.v4().length-6);
  const fileExtension = image.mimetype.match(/[/](.*)/)[1].replace('', '.');
  const uploadParams = {
    Bucket: BUCKET,
    Key: hex + fileExtension,
    Body: image.buffer
  }
  console.log("YOLO")
  const s3 = new S3Client({ region: REGION });
  const run = async () => {
    try {
      const data = await s3.send(new PutObjectCommand(uploadParams));
      console.log("Success", data);
    } catch (err) {
      console.log("Error", err);
    }
  };
  run();
  return {
    url: `${BASE_URL}${BUCKET}/${uploadParams.Key}`,
    key: uploadParams.key,
  }
}
