import User from 'models/user';
import bcrypt from 'bcryptjs';
import ErrorHandler from 'utils/errorHandler';
import catchAsyncError from 'middlewares/catchAsyncError';
import cloudinary from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_APISECRET,
});

export const registerUser = catchAsyncError(async (req, res) => {
    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'bookit/avatars',
        width: '150px',
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
