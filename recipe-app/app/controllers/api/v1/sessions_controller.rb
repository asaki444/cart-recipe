module Api::V1

    class SessionsController < ApplicationController

        def create
            user = User.find_by(email: params["users"]["email"]).try(:authenticate, params["users"]["password"])
        end

    end
end