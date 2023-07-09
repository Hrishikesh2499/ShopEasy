const Item = require("../models/item");
const Vendor = require("../models/vendor");
const Variant = require("../models/variant");
const Type = require("../models/type");

const { startSession, Types } = require("mongoose");
const { updateVendor } = require("./vendorRepo");
const { updateVariant } = require("./variantRepository");
const { updateType } = require("./typeRepo");

const fetchAllItems = async (req, res) => {
  try {
    const items = await Item.find()
      .populate("vendor")
      .populate("type")
      .populate("variant");
    // .populate("options");
    return items;
  } catch (error) {
    return res.json(error.message);
  }
};

const createItem = async (req, res) => {
  const session = await startSession();
  try {
    session.startTransaction();
    const { vendor, variant, type } = req.body;
    var savedVendor, savedVariant, savedType;
    // Save the child objects (Vendor, Type, Option, Variant) to the database
    if (vendor) savedVendor = await Vendor.create(vendor);
    if (variant) savedVariant = await Variant.create(variant);
    if (type) savedType = await Type.create(type);

    // Create a new Item object with references to the child objects
    const newItem = new Item({
      ...req.body,
    });
    if (savedVendor) {
      newItem.vendor = savedVendor._id;
    }
    if (savedVariant) {
      newItem.variant = savedVariant._id;
    }
    if (savedType) {
      newItem.type = savedType._id;
    }
    // Save the Item object to the database
    await Item.create(newItem);
    await session.commitTransaction();
    return fetchAllItems(req, res);
  } catch (error) {
    await session.abortTransaction();
    return res.json(error.message);
  }
};

const updateItem = async (req, res) => {
  try {
    const { vendor, variant, type, ...item } = req.body;
    const newItem = new Item({ ...item });
    if (vendor) {
      newItem.vendor = await updateVendor(vendor);
    }
    if (variant) {
      newItem.variant = await updateVariant(variant);
    }
    if (type) {
      newItem.type = await updateType(type);
    }
    await Item.findByIdAndUpdate(item._id, newItem);
    return fetchAllItems(req, res);
  } catch (error) {
    console.log(error.message);
    return res.json(error.message);
  }
};

const deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndRemove(req);
    return fetchAllItems(req, res);
  } catch (error) {
    return res.json(error.message);
  }
};

module.exports = { fetchAllItems, createItem, updateItem, deleteItem };
