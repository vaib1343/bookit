import User from 'models/user';
import bcrypt from 'bcryptjs';
import ErrorHandler from 'utils/errorHandler';
import catchAsyncError from 'middlewares/catchAsyncError';

export const registerUser = catchAsyncError(async (req, res) => {
    const { email, password, name } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'public_id',
            url: 'URL',
        },
    });
    res.status(200).json({ success: true, message: 'User registered successfully' });
});
