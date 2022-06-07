import User from 'models/user';
import bcrypt from 'bcryptjs';
import ErrorHandler from 'utils/errorHandler';
import catchAsyncError from 'middlewares/catchAsyncError';
import cloudinary from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_APISECRET,
});

export const registerUser = catchAsyncError(async (req, res) => {
    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'bookit/avatars',
        width: '150',
        crop: 'scale',
    });

    const { email, password, name } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: result.public_id,
            url: result.url,
        },
    });
    res.status(200).json({ success: true, message: 'User registered successfully' });
});

export const currentUser = catchAsyncError(async (req, res) => {
    const user = await User.findById(req.user._id);
    res.status(200).json({
        success: true,
        user,
    });
});

export const updateUser = catchAsyncError(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        user.name = req.body.name;
        user.email = req.body.email;

        if (req.body.password) user.password = req.body.password;
    }
    if (req.body.avatar !== '') {
        const image_id = user.avatar.public_id;
        await cloudinary.v2.uploader.destroy(image_id);
        const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: 'bookit/avatars',
            width: '150',
            crop: 'scale',
        });
        user.avatar = {
            public_id: result.public_id,
            url: result.url,
        };
    }
    await user.save();
    res.status(200).json({
        success: true,
    });
});
