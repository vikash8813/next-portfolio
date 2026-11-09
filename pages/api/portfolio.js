import portfolio from '../../data/portfolio';

export default function handler(req, res) {
    res.status(200).json(portfolio)
}
