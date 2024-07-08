import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@WebServlet("/submitMemorialMessage")
@MultipartConfig
public class MemorialMessageServlet extends HttpServlet {
    private static final String UPLOAD_DIR = "uploads";

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String name = request.getParameter("name");
        String message = request.getParameter("message");
        Part photoPart = request.getPart("photo");

        String photoFileName = Paths.get(photoPart.getSubmittedFileName()).getFileName().toString();
        String uploadPath = getServletContext().getRealPath("") + File.separator + UPLOAD_DIR;
        File uploadDir = new File(uploadPath);
        if (!uploadDir.exists()) {
            uploadDir.mkdir();
        }
        try (InputStream photoInputStream = photoPart.getInputStream();
             FileOutputStream photoOutputStream = new FileOutputStream(new File(uploadPath + File.separator + photoFileName))) {
            int read;
            final byte[] bytes = new byte[1024];
            while ((read = photoInputStream.read(bytes)) != -1) {
                photoOutputStream.write(bytes, 0, read);
            }
        }

        String dbURL = "jdbc:mysql://localhost:3306/yourdatabase";
        String dbUser = "yourusername";
        String dbPassword = "yourpassword";

        try (Connection connection = DriverManager.getConnection(dbURL, dbUser, dbPassword)) {
            String sql = "INSERT INTO memorial_messages (name, message, photo) VALUES (?, ?, ?)";
            try (PreparedStatement statement = connection.prepareStatement(sql)) {
                statement.setString(1, name);
                statement.setString(2, message);
                statement.setString(3, photoFileName);
                statement.executeUpdate();
            }
        } catch (SQLException e) {
            e.printStackTrace();
            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Database error");
            return;
        }

        response.setContentType("text/plain");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write("留言已收到，感谢您的参与！");
    }
}
