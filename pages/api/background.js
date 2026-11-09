import background from '../../data/background';

export default function handler(req, res) {
    res.status(200).json(background)
}
