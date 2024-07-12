const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: { 
        type: String,
        required: true
    },
    subcategory: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    discounts: [
        {
            type: { type: String },
            amount: { type: Number }
        }
    ],
    tax: {
        type: Number
    },
    stockQuantity: {
        type: Number,
        required: true
    },
    reorderLevel: {
        type: Number
    },
    supplierInfo: {
        name: { type: String },
        contact: { type: String }
    },
    warehouseLocation: {
        type: String
    },
    specifications: {
        dimensions: { type: String },
        weight: { type: String },
        color: { type: String },
        material: { type: String },
        batteryLife: { type: String }
    },
    media: {
        images: [String],
        videos: [String],
        documents: [String]
    },
    targetAudience: {
        type: String
    },
    reviews: [
        {
            customer: { type: String },
            rating: { type: Number },
            comment: { type: String }
        }
    ],
    faqs: [
        {
            question: { type: String },
            answer: { type: String }
        }
    ],
    salesChannels: [String],
    marketingCampaigns: [String],
    seoMetadata: {
        keywords: [String],
        metaDescription: { type: String }
    },
    certifications: [String],
    warranty: { type: String },
    returnPolicy: { type: String },
    legalDisclaimers: { type: String },
    shipping: {
        weight: { type: String },
        dimensions: { type: String },
        deliveryOptions: [String],
        shippingCosts: [
            {
                method: { type: String },
                cost: { type: Number }
            }
        ]
    },
    analytics: {
        salesData: [
            {
                date: { type: Date },
                unitsSold: { type: Number }
            }
        ],
        performanceMetrics: {
            conversionRate: { type: Number },
            returnRate: { type: Number }
        },
        customerBehavior: {
            averageSessionDuration: { type: String },
            pageViews: { type: Number }
        }
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Product', ProductSchema)
