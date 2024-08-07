import { Avatar, Card, CardHeader, CardContent, CardMedia, Typography } from '@mui/material';
import '../styles/styles.css';

const UserCard = ({ user }) => {
    return (
        <Card className="Card">
            <CardMedia
                className="CardMedia"
                component="img"
                image={user.avatar}
                alt={user.name}
            />
            <CardHeader
                avatar={<Avatar src={user.avatar} />}
                title={user.name}
                subheader={user.email}
            />
            <CardContent>
                <Typography variant="h4" component="div">
                    {user.name} is a software developer.           
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {user.email}         
                </Typography>
            </CardContent>
        </Card>
    );
};

export default UserCard;